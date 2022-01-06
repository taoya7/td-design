import { useCreation } from '@td-design/rn-hooks';
import { useTheme, spacing, layout, useRestyle } from '@shopify/restyle';
import { Color, Theme } from '../theme';
import helpers from '../helpers';

import type { ButtonProps } from '.';
import { TouchableOpacityProps } from 'react-native';

const { px } = helpers;
const restyleFunctions = [spacing, layout];
export default function useButton({
  loading,
  type = 'primary',
  width = '100%',
  disabled = false,
  borderRadius,
  onPress,
  ...restProps
}: ButtonProps) {
  const theme = useTheme<Theme>();

  const backgroundColor = useCreation(() => {
    if (type === 'primary') {
      return disabled ? theme.colors.gray200 : theme.colors.primary200;
    } else if (type === 'secondary') {
      return disabled ? theme.colors.disabled : theme.colors.transparent;
    }
    return theme.colors.transparent;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, type]);

  const textColor = useCreation(() => {
    switch (type) {
      case 'primary':
      default:
        return disabled ? 'gray400' : 'white';

      case 'secondary':
        return disabled ? 'gray400' : 'primary200';
    }
  }, [disabled, type]);

  const indicatorColor = useCreation(() => {
    switch (type) {
      case 'primary':
      default:
        return disabled ? theme.colors.gray400 : theme.colors.white;

      case 'secondary':
        return disabled ? theme.colors.gray400 : theme.colors.primary200;
    }
  }, []);

  const _borderRadius = borderRadius ?? theme.borderRadii.x1;

  /** 容器属性 */
  const touchableProps = useRestyle(restyleFunctions, {
    disabled,
    onPress: () => {
      if (loading) return;
      onPress?.();
    },
    activeOpacity: disabled ? 1 : 0.6,
    style: {
      height: px(44),
      width,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor,
      borderWidth: type === 'secondary' ? 1 : 0,
      borderColor:
        type === 'primary' ? theme.colors.border : disabled ? theme.colors.disabled : theme.colors.primary200,
      borderRadius: _borderRadius,
    },
    ...restProps,
  });

  return {
    textColor,
    indicatorColor,
    touchableProps,
  } as {
    textColor: Color;
    indicatorColor: string;
    touchableProps: TouchableOpacityProps;
  };
}
