import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TextProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../assets/theme/colors';
import AppEmptySpace from './AppEmptySpace';
import AppIcon from './AppIcon';
import { AppText } from './AppText';

type AppCheckBoxType = {
  onPress: () => any;
  text: string;
  checkBoxSize?: number;
  textStyle?: TextProps;
  isEnabled?: boolean;
  status?: boolean;
};

export const AppCheckBox: React.FC<AppCheckBoxType> = ({
  onPress,
  checkBoxSize = 18,
  textStyle,
  text,
  isEnabled = true,
  status = false,
}) => {
  const [selected, setSelected] = useState(status);

  const changeState = () => {
    if (isEnabled) {
      setSelected(!selected);
      onPress();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={changeState}>
        <AppIcon
          name={selected ? 'check-square' : 'square'}
          size={checkBoxSize}
          color={
            !isEnabled
              ? colors.gray[400]
              : selected
              ? colors.theme.primary
              : colors.gray[600]
          }
        />
      </Pressable>
      <AppEmptySpace width={8} />
      <Pressable onPress={changeState}>
        <AppText style={[textStyle]}>{text}</AppText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
