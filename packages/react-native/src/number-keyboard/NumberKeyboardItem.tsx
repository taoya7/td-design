import React, { forwardRef } from 'react';
import { Keyboard, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import { useTheme } from '@shopify/restyle';

import Box from '../box';
import Flex from '../flex';
import helpers from '../helpers';
import SvgIcon from '../svg-icon';
import Text from '../text';
import { Theme } from '../theme';
import NumberKeyboardModal from './NumberKeyboardModal';
import { NumberKeyboardItemProps, NumberKeyboardRef } from './type';
import useNumberKeyboard from './useNumberKeyboard';

const AnimatedTouchableIcon = Animated.createAnimatedComponent(TouchableOpacity);
const { px } = helpers;
const NumberKeyboardItem = forwardRef<NumberKeyboardRef, NumberKeyboardItemProps>(
  (
    {
      value,
      onChange,
      placeholder = '请输入',
      disabled = false,
      type,
      style,
      inputStyle,
      allowClear = true,
      digit = 0,
      minHeight = px(32),
      ...restProps
    },
    ref
  ) => {
    const theme = useTheme<Theme>();
    const { visible, setTrue, setFalse, clearIconStyle, currentText, handleSubmit, handleInputClear } =
      useNumberKeyboard({
        value,
        onChange,
        digit,
        type,
        placeholder,
        ref,
      });

    return (
      <Box width="100%">
        <Flex style={style}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              Keyboard.dismiss();
              if (disabled) return;
              setTrue();
            }}
            style={[
              {
                flexGrow: 1,
                minHeight,
                justifyContent: 'center',
              },
            ]}
          >
            <Text
              variant="d2"
              color={currentText === placeholder ? 'gray300' : 'text'}
              style={[{ textAlign: 'right' }, inputStyle]}
              selectable
            >
              {currentText}
            </Text>
          </TouchableOpacity>
          {allowClear && !disabled && (
            <AnimatedTouchableIcon
              activeOpacity={0.5}
              onPress={handleInputClear}
              style={[{ width: 0, overflow: 'hidden', alignItems: 'center' }, clearIconStyle]}
            >
              <SvgIcon name="closecircleo" color={theme.colors.icon} />
            </AnimatedTouchableIcon>
          )}
        </Flex>
        <NumberKeyboardModal
          {...restProps}
          type={type}
          value={currentText === placeholder ? '' : currentText}
          visible={visible}
          onClose={setFalse}
          onSubmit={handleSubmit}
        />
      </Box>
    );
  }
);
NumberKeyboardItem.displayName = 'NumberKeyboardItem';

export default NumberKeyboardItem;
