import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import dayjs from 'dayjs';
import { Theme } from '../config/theme';
import { px, ONE_PIXEL } from '../helper';
import Text from '../text';
import Flex from '../flex';
import Icon from '../icon';
import { CalendarHeaderProps } from './type';

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  month = dayjs(),
  addMonth,
  monthFormat = 'YYYY年MM月',
  firstDay,
  headerStyle,
  showArrowLeft = true,
  showArrowRight = true,
  onPressArrowLeft,
  onPressArrowRight,
}) => {
  const theme = useTheme<Theme>();

  const renderArrow = (direction: 'left' | 'right') => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (direction === 'left') {
            onPressArrowLeft ? onPressArrowLeft(month) : addMonth?.(-1);
          } else {
            onPressArrowRight ? onPressArrowRight(month) : addMonth?.(1);
          }
        }}
        style={{ padding: px(10) }}
        hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
      >
        <Icon name={direction} color={theme.colors.secondaryTextColor} />
      </TouchableOpacity>
    );
  };

  const renderDayNames = () => {
    let weekDaysNames = ['日', '一', '二', '三', '四', '五', '六'];

    if (firstDay) {
      const _dayNames = weekDaysNames;
      weekDaysNames = _dayNames.slice(firstDay).concat(_dayNames.slice(0, firstDay));
    }

    return (
      <Flex style={{ marginTop: px(8) }} justifyContent="space-around">
        {weekDaysNames.map((day, idx) => (
          <Text key={idx} variant="secondaryBody" numberOfLines={1}>
            {day}
          </Text>
        ))}
      </Flex>
    );
  };

  return (
    <View>
      <Flex
        justifyContent="center"
        style={[
          {
            paddingVertical: px(6),
            borderBottomColor: theme.colors.borderColor,
            borderBottomWidth: ONE_PIXEL,
          },
          headerStyle,
        ]}
      >
        {showArrowLeft && renderArrow('left')}
        <Text variant="secondaryBody">{month.format(monthFormat)}</Text>
        {showArrowRight && renderArrow('right')}
      </Flex>
      {renderDayNames()}
    </View>
  );
};

export default CalendarHeader;
