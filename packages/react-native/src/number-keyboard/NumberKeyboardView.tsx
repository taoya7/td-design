import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { useTheme } from '@shopify/restyle';

import Box from '../box';
import Flex from '../flex';
import helpers from '../helpers';
import Text from '../text';
import { Theme } from '../theme';
import { NumberKeyboardViewProps } from './type';

const { px, ONE_PIXEL, deviceWidth } = helpers;
const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const PER_WIDTH = deviceWidth / 4;

const keyTypes = {
  number: [
    {
      key: '0',
      flex: 2,
    },
    {
      key: '.',
      flex: 1,
    },
  ],
  idcard: [
    {
      key: '0',
      flex: 2,
    },
    {
      key: 'X',
      flex: 1,
    },
  ],
  integer: [
    {
      key: '0',
      flex: 1,
    },
  ],
};

const NumberKeyboardView: FC<NumberKeyboardViewProps> = ({
  type = 'number',
  onPress,
  onDelete,
  onSubmit,
  submitText = '确定',
  activeOpacity = 0.5,
}) => {
  const theme = useTheme<Theme>();

  const styles = StyleSheet.create({
    close: {
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: ONE_PIXEL,
      borderRightWidth: ONE_PIXEL,
      borderColor: theme.colors.border,
      height: PER_WIDTH * 2,
    },
    submit: {
      backgroundColor: theme.colors.primary200,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: ONE_PIXEL,
      borderRightWidth: ONE_PIXEL,
      borderColor: theme.colors.border,
      height: PER_WIDTH * 2,
    },
  });

  return (
    <Flex backgroundColor="background">
      <Box width={PER_WIDTH * 3}>
        <Flex>
          {keys.slice(0, 3).map(item => (
            <KeyItem key={item} item={item} onPress={onPress} activeOpacity={activeOpacity} />
          ))}
        </Flex>
        <Flex>
          {keys.slice(3, 6).map(item => (
            <KeyItem key={item} item={item} onPress={onPress} activeOpacity={activeOpacity} />
          ))}
        </Flex>
        <Flex>
          {keys.slice(6, 9).map(item => (
            <KeyItem key={item} item={item} onPress={onPress} activeOpacity={activeOpacity} />
          ))}
        </Flex>
        <Flex>
          {keyTypes[type].map(item => (
            <KeyTypeItem key={item.key} item={item} onPress={onPress} activeOpacity={activeOpacity} />
          ))}
        </Flex>
      </Box>
      <Box width={PER_WIDTH * 1}>
        <TouchableOpacity activeOpacity={activeOpacity} style={styles.close} onPress={onDelete}>
          <SvgXml
            xml={`
              <svg
                t="1607517664521"
                class="icon"
                viewBox="0 0 1579 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7769"
                width="200"
                height="200"
              >
                <path
                  d="M1473.619354 0H499.942734a122.427628 122.427628 0 0 0-94.06463 44.818325L13.044586 478.700403A58.162099 58.162099 0 0 0 15.557763 554.99328l397.261497 437.292818a101.065623 101.065623 0 0 0 72.941974 31.654064h987.85812a109.323205 109.323205 0 0 0 106.331327-111.477356V111.297844A109.263367 109.263367 0 0 0 1473.619354 0z m4.787004 823.544206a87.602174 87.602174 0 0 1-88.021037 86.584936H529.981184a86.345585 86.345585 0 0 1-60.256413-24.533396L141.276456 545.419272a43.083036 43.083036 0 0 1-2.154151-59.239175l324.738386-337.364109a103.638637 103.638637 0 0 1 77.788815-34.825454h849.09484a87.602174 87.602174 0 0 1 88.021037 86.584935v622.968737z"
                  fill="${theme.colors.gray500}"
                  p-id="7770"
                ></path>
                <path
                  d="M1192.562379 665.453398a56.965348 56.965348 0 1 1-80.541342 80.541343l-151.508678-151.508678-147.080699 147.260212a56.965348 56.965348 0 0 1-80.541343-80.541343l147.260212-147.260212-151.748028-151.508677a56.90551 56.90551 0 0 1 80.36183-80.541343l151.508678 151.508678 155.577631-155.577631a56.90551 56.90551 0 0 1 80.541343 80.36183l-155.577631 155.577631z"
                  fill="${theme.colors.gray500}"
                  p-id="7771"
                ></path>
              </svg>`}
            width={px(26)}
            height={px(17)}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={activeOpacity} style={styles.submit} onPress={onSubmit}>
          <Text variant="h1" color="white">
            {submitText}
          </Text>
        </TouchableOpacity>
      </Box>
    </Flex>
  );
};
NumberKeyboardView.displayName = 'NumberKeyboardView';

const KeyItem = ({
  item,
  onPress,
  activeOpacity,
}: {
  item: string;
  onPress?: (item: string) => void;
  activeOpacity: number;
}) => {
  const theme = useTheme<Theme>();

  const styles = StyleSheet.create({
    wrapper: {
      width: PER_WIDTH,
      height: PER_WIDTH,
      borderTopWidth: ONE_PIXEL,
      borderRightWidth: ONE_PIXEL,
      borderColor: theme.colors.border,
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Box style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => {
          onPress?.(item);
        }}
        style={styles.item}
      >
        <Text variant="h0" color="gray500">
          {item}
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

const KeyTypeItem = ({
  item,
  onPress,
  activeOpacity,
}: {
  item: { key: string; flex: number };
  onPress?: (item: string) => void;
  activeOpacity: number;
}) => {
  const theme = useTheme<Theme>();

  const styles = StyleSheet.create({
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: item.flex,
      height: PER_WIDTH,
      borderTopWidth: ONE_PIXEL,
      borderRightWidth: ONE_PIXEL,
      borderBottomWidth: ONE_PIXEL,
      borderColor: theme.colors.border,
    },
  });

  return (
    <TouchableOpacity
      key={item.key}
      activeOpacity={activeOpacity}
      onPress={() => {
        onPress?.(item.key);
      }}
      style={styles.wrapper}
    >
      <Text variant="h0" color="gray500">
        {item.key}
      </Text>
    </TouchableOpacity>
  );
};

export default NumberKeyboardView;
