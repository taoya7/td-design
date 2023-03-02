import { useContext, useEffect, useRef } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useMemoizedFn } from '@td-design/rn-hooks';

import type { SwipeRowProps } from '.';
import { SwipeRowContext } from './context';

export default function useSwipeRow({
  anchor,
  onRemove,
  height,
}: Pick<SwipeRowProps, 'onRemove' | 'height' | 'anchor'>) {
  const swipeableRef = useRef<Swipeable>(null);
  const { changeState, id } = useContext(SwipeRowContext);

  useEffect(() => {
    if (anchor === id) {
      swipeableRef.current?.close();
    }
  }, [anchor, id]);

  const handleClose = () => {
    swipeableRef.current?.close();
  };

  const rowHeight = useSharedValue(height);
  const handleRemove = async () => {
    if (!onRemove) {
      rowHeight.value = withTiming(
        0,
        {
          duration: 300,
        },
        finished => {
          if (finished) {
            runOnJS(handleClose)();
          }
        }
      );
    } else {
      await onRemove();
      rowHeight.value = withTiming(
        0,
        {
          duration: 300,
        },
        finished => {
          if (finished) {
            runOnJS(handleClose)();
          }
        }
      );
    }
  };

  const rowAnimatedStyle = useAnimatedStyle(() => ({
    height: rowHeight.value,
  }));

  return {
    rowAnimatedStyle,
    swipeableRef,

    changeState,
    handleRemove: useMemoizedFn(handleRemove),
  };
}
