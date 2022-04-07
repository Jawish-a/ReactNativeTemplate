import { useNavigation } from '@react-navigation/native';

import React from 'react';
import { View, ViewProps } from 'react-native';
import { AppButton } from '../components/common/AppButton';
import { AppText } from '../components/common/AppText';
import { MainLayout } from '../components/layouts/Main.Layout';
import { useTranslation } from 'react-i18next';
import { setLocalStorageLanguage } from '../utils/getLanguage';

type HomeScreenType = {};

export const HomeScreen: React.FC<ViewProps> = ({}) => {
  const nav = useNavigation();
  const { t, i18n } = useTranslation();
  return (
    <MainLayout title={'hola'}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AppText>Home Screen</AppText>
        <AppButton onPress={() => setLocalStorageLanguage('ar')} />
        <AppText>Home Screen</AppText>
        <AppText appTextColor={'primary'}>{t('common.hello')}</AppText>
        <AppText appTextColor={'success'}>I AM success</AppText>
        <AppText appTextColor={'info'}>I AM info</AppText>
        <AppText appTextColor={'warning'}>I AM warning</AppText>
        <AppText appTextColor={'danger'}>I AM danger</AppText>
        <AppText appTextColor={'danger'}>I AM danger</AppText>
      </View>
    </MainLayout>
  );
};
