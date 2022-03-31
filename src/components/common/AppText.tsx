import { StyleSheet, Text, TextProps, useColorScheme } from 'react-native';
import React, { Children } from 'react';
import { typography } from '../../assets/theme/typography';
import { colors } from '../../assets/theme/colors';

export const AppText: React.FC<TextProps> = ({ children, ...otherProps }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      // selectable={true}
      // selectionColor={colors.blue[100]}
      {...otherProps}
      style={[
        styles.text,
        isDarkMode && { color: colors.white },
        otherProps.style,
      ]}>
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
