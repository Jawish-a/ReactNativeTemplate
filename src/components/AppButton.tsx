import { Text, Pressable, PressableProps } from 'react-native';
import React from 'react';

export const AppButton: React.FC<PressableProps> = ({
  onPress,
  ...otherProps
}) => {
  return (
    <Pressable {...otherProps} onPress={onPress}>
      <Text>I'm pressable!</Text>
    </Pressable>
  );
};
