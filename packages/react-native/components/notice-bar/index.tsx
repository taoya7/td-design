import React, { FC, useState } from 'react';
import { useTheme } from '@shopify/restyle';
import Icon from '../icon';
import { Theme } from '../config/theme';
import Box from '../box';
import { TouchableOpacity } from 'react-native';
import { mix, useTransition } from 'react-native-redash';
import Animated, { Easing } from 'react-native-reanimated';
import { px } from '../helper';
import { NoticeBarProps } from './type';
import VerticalNotice from './VerticalNotice';
import HorizontalNotice from './HorizontalNotice';

const NoticeBar: FC<NoticeBarProps> = props => {
  const theme = useTheme<Theme>();
  const {
    icon = <Icon name="bells" color={theme.colors.warningColor1} />,
    mode = '',
    data = [''],
    onPress,
    onClose,
    animation = false,
    duration,
    delay = 1500,
  } = props;

  /** 关闭效果 */
  const [closed, setClosed] = useState(false);
  const heightAnimation = useTransition(closed, { duration: 300, easing: Easing.inOut(Easing.ease) });
  const height = mix(heightAnimation, px(36), 0);

  /** 关闭事件 */
  const handleClose = () => {
    const originClose = onClose || function () {};
    const res = originClose();
    if (res && res.then) {
      res.then(() => {
        setClosed(true);
      });
    } else {
      setClosed(true);
    }
  };

  const BaseContent =
    data.length > 1 ? (
      <VerticalNotice {...{ data, icon, duration, delay }} />
    ) : (
      <HorizontalNotice {...{ data, icon, duration, animation }} />
    );

  switch (mode) {
    case 'close':
      return (
        <TouchableOpacity onPress={onPress}>
          <Animated.View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: theme.colors.backgroundColor3,
              height,
            }}
          >
            {BaseContent}
            <TouchableOpacity
              onPress={handleClose}
              style={{
                paddingHorizontal: theme.spacing.xs,
                position: 'absolute',
                height: px(36),
                zIndex: 9,
                right: 0,
                justifyContent: 'center',
                backgroundColor: theme.colors.backgroundColor3,
              }}
            >
              <Icon name="close" color={theme.colors.warningColor1} />
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      );

    case 'link':
      return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <Box backgroundColor="backgroundColor3" height={px(36)} position="relative" overflow="hidden">
            {BaseContent}
            <Box
              height={px(36)}
              position="absolute"
              zIndex={9}
              right={0}
              paddingHorizontal="xs"
              justifyContent="center"
              backgroundColor="backgroundColor3"
            >
              <Icon name="right" color={theme.colors.warningColor1} />
            </Box>
          </Box>
        </TouchableOpacity>
      );

    default:
      return (
        <Box backgroundColor="backgroundColor3" height={px(36)} position="relative" overflow="hidden">
          {BaseContent}
        </Box>
      );
  }
};

export default NoticeBar;
