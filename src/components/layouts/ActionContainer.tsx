import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { IconProps } from 'react-native-vector-icons/Icon';
import { colors } from '../../assets/theme/colors';

import AppIcon from '../common/AppIcon';

export const ActionContainer: React.FC<ViewProps & any> = ({
  name,
  ...otherProps
}) => {
  return (
    <View key={name} style={styles.actionContainer}>
      {name ? (
        <AppIcon name={name} {...otherProps} />
      ) : (
        <View style={{ width: 24 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    height: '100%',
  },
});
