import React from 'react';
import { forwardRef } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, { FadeInRight, FadeOutRight } from 'react-native-reanimated';

import { Box, Pressable, SvgIcon, Text, Theme, useTheme } from '@td-design/react-native';

import Picker from '../picker';
import { ModalPickerProps, PickerProps } from '../picker/type';
import { PickerRef } from '../type';
import usePicker from '../usePicker';

interface PickerItemProps extends PickerProps, Omit<ModalPickerProps, 'visible' | 'displayType'> {
  placeholder?: string;
  /** 是否允许清除 */
  allowClear?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: StyleProp<ViewStyle>;
}

const AnimatedTouchableIcon = Animated.createAnimatedComponent(Pressable);
const PickerItem = forwardRef<PickerRef, PickerItemProps>(
  (
    {
      placeholder = '请选择',
      disabled = false,
      cascade,
      value,
      data,
      onChange,
      style,
      allowClear = true,
      activeOpacity = 0.6,
      ...restProps
    },
    ref
  ) => {
    const theme = useTheme<Theme>();
    const { currentText, visible, state, setFalse, handlePress, handleChange, handleInputClear } = usePicker({
      data,
      cascade,
      value,
      onChange,
      placeholder,
      ref,
    });

    const styles = StyleSheet.create({
      content: {
        flexGrow: 1,
        paddingVertical: theme.spacing.x1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
      },
      icon: { alignItems: 'flex-end' },
    });

    const renderContent = () => (
      <>
        <Text
          variant="p1"
          color={disabled ? 'disabled' : 'text'}
          numberOfLines={1}
          textAlign={'right'}
          style={{ flex: 1 }}
        >
          {currentText}
        </Text>
        {!disabled && allowClear && !!currentText && currentText !== placeholder && (
          <AnimatedTouchableIcon
            entering={FadeInRight}
            exiting={FadeOutRight}
            activeOpacity={1}
            onPress={handleInputClear}
            style={styles.icon}
          >
            <SvgIcon name="closecircleo" color={theme.colors.icon} />
          </AnimatedTouchableIcon>
        )}
      </>
    );

    if (!disabled)
      return (
        <>
          <Pressable onPress={handlePress} activeOpacity={activeOpacity} style={[styles.content, style]}>
            {renderContent()}
          </Pressable>
          <Picker
            {...restProps}
            {...{ cascade, value: state, data, visible, onChange: handleChange, onClose: setFalse }}
          />
        </>
      );

    return <Box style={[styles.content, style]}>{renderContent()}</Box>;
  }
);

export default PickerItem;
