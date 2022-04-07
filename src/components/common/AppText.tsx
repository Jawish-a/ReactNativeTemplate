import { StyleSheet, Text, TextProps, useColorScheme } from 'react-native';
import React, { Children } from 'react';
import { typography } from '../../assets/theme/typography';
import { colors } from '../../assets/theme/colors';
import { renderAppColor } from '../../utils/renderAppColor';

type AppTextType = {
  appTextStatus?: 'enabled' | 'disabled';
  appTextColor?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
};

export const AppText: React.FC<TextProps & AppTextType> = ({
  appTextColor,
  appTextStatus = 'enabled',
  children,
  ...otherProps
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      // selectable={true}
      // selectionColor={colors.blue[100]}
      {...otherProps}
      style={[
        styles.text,
        renderAppColor(isDarkMode, appTextColor),
        otherProps.style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    ...typography.p1,
    color: colors.theme.black,
  },
});
