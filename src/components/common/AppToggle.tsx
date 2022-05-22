import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Switch,
  SwitchProps,
  TextProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../assets/theme/colors';
import AppEmptySpace from './AppEmptySpace';
import { AppText } from './AppText';

type AppSwitchType = SwitchProps & {
  onPress: () => void;
  text: string;
  isEnabled?: boolean;
  status?: boolean;
  direction?: 'right' | 'left';
};

export const AppSwitch: React.FC<AppSwitchType> = ({
  onPress,
  text,
  isEnabled = true,
  status = false,
  direction = 'right',
  ...switchProps
}) => {
  const [selected, setSelected] = useState(status);

  const changeState = () => {
    if (isEnabled) {
      setSelected(!selected);
      onPress();
    }
  };
  const isTextDirectionRight = direction === 'right';
  return (
    <View
      //   pointerEvents={!isEnabled ? 'none' : 'auto'}
      style={[
        styles.container,
        { flexDirection: isTextDirectionRight ? 'row' : 'row-reverse' },
      ]}>
      <Switch
        {...switchProps}
        onChange={changeState}
        value={selected}
        disabled={!isEnabled}
        style={{
          transform: [{ scale: 0.7 }],
        }}
        thumbColor={isEnabled ? colors.theme.light : colors.gray[300]}
        ios_backgroundColor={colors.gray[200]}
        trackColor={{
          false: colors.gray[300],
          true: isEnabled ? colors.theme.success : colors.gray[200],
        }}
      />
      <AppEmptySpace width={8} />
      <Pressable onPress={changeState}>
        <AppText style={[]}>{text}</AppText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
