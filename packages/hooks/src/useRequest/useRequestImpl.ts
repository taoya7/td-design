import useCreation from '../useCreation';
import useLatest from '../useLatest';
import useMemoizedFn from '../useMemoizedFn';
import useMount from '../useMount';
import useUnmount from '../useUnmount';
import useUpdate from '../useUpdate';
import Fetch from './Fetch';
import type { Options, Plugin, Result, Service } from './types';

export default function useRequestImpl<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
  plugins: Plugin<TData, TParams>[] = []
) {
  const { manual = false, ...rest } = options;

  if (process.env.NODE_ENV !== 'production') {
    if (options.defaultParams && !Array.isArray(options.defaultParams)) {
      console.warn(`expected defaultParams is array, got ${typeof options.defaultParams}`);
    }
  }

  const fetchOptions = {
    manual,
    ...rest,
  };

  const serviceRef = useLatest(service);
  const forceUpdate = useUpdate();

  const fetchInstance = useCreation(() => {
    const initState = plugins.map(p => p?.onInit?.(fetchOptions)).filter(Boolean);

    return new Fetch<TData, TParams>(serviceRef, fetchOptions, forceUpdate, Object.assign({}, ...initState));
  }, []);

  fetchInstance.options = fetchOptions;
  fetchInstance.pluginImpls = plugins.map(plugin => plugin(fetchInstance, fetchOptions));

  useMount(() => {
    if (!manual) {
      // useCachePlugin can set fetchInstance.state.params from cache when init
      const params = fetchInstance.state.params || options.defaultParams || [];
      // @ts-ignore
      fetchInstance.run(...params);
    }
  });

  useUnmount(() => {
    fetchInstance.cancel();
  });

  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),
  } as Result<TData, TParams>;
}
