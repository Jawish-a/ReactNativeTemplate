import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, SafeAreaView, ViewProps } from 'react-native';
import { ScreenProps, ScreenStackProps } from 'react-native-screens';
import { AppButton } from '../components/common/AppButton';
import { AppText } from '../components/common/AppText';
import { MainLayout } from '../components/layouts/Main.Layout';

type HomeScreenType = {};

export const HomeScreen: React.FC<ViewProps> = ({}) => {
  const nav = useNavigation();
  return (
    <MainLayout title={'hola'}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AppText>Home Screen</AppText>
        <AppButton onPress={() => nav.navigate('Another')} />
        <AppText>Home Screen</AppText>
      </View>
    </MainLayout>
  );
};
