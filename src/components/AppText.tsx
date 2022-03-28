import { StyleSheet, Text, TextProps } from 'react-native';
import React, { Children } from 'react';
import { typography } from '../assets/theme/typography';
import { colors } from '../assets/theme/colors';

export const AppText: React.FC<TextProps> = ({ children, ...otherProps }) => {
  return (
    <Text
      // selectable={true}
      // selectionColor={colors.blue[100]}
      {...otherProps}
      style={[styles.text, otherProps.style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    ...typography.p1,
    color: colors.black,
  },
});
