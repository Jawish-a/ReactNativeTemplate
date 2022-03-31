import { Text, Pressable, PressableProps } from 'react-native';
import React from 'react';
import { AppText } from './AppText';

export const AppButton: React.FC<PressableProps> = ({
  onPress,
  ...otherProps
}) => {
  return (
    <Pressable {...otherProps} onPress={onPress}>
      <AppText>I'm pressable!</AppText>
    </Pressable>
  );
};
