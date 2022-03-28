import { StyleSheet, Text } from 'react-native';
import React, { Children } from 'react';
import { typography } from '../assets/theme/typography';
import { colors } from '../assets/theme/colors';

export default function AppText({ children, ...otherProps }) {
  return (
    <Text {...otherProps} style={[styles.text, otherProps.style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...typography.p1,
    color: colors.black,
  },
});
