import { Text, Pressable, PressableProps } from 'react-native';
import React from 'react';
import { AppText } from './AppText';
import { colors } from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

type AppButtonType = {
  height?: number;
};

export const AppButton: React.FC<PressableProps & AppButtonType> = ({
  onPress,
  height = 40,
  ...otherProps
}) => {
  return (
    <Pressable
      style={{
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.theme.dark,
        borderWidth: 1,
        paddingHorizontal: 16,
        // width: '100%',
      }}
      {...otherProps}
      onPress={onPress}>
      <AppText>I'm pressable!</AppText>
    </Pressable>
  );
};
