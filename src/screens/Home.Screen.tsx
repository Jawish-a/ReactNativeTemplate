import { useNavigation } from '@react-navigation/native';

import React from 'react';
import { View, ViewProps } from 'react-native';
import { AppButton } from '../components/common/AppButton';
import { AppText } from '../components/common/AppText';
import { MainLayout } from '../components/layouts/Main.Layout';
import { useTranslation } from 'react-i18next';
import { setLocalStorageLanguage } from '../utils/getLanguage';
import { AppAvatar } from '../components/common/AppAvatar';
import { typography } from '../assets/theme/typography';

type HomeScreenType = {};

export const HomeScreen: React.FC<ViewProps> = ({}) => {
  const nav = useNavigation();
  const { t, i18n } = useTranslation();
  return (
    <MainLayout title={'hola'}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AppText>Home Screen</AppText>
        <AppButton
          onPress={() => setLocalStorageLanguage('en')}
          size={15}
          textValue={'Change to EN'}
          icon={'box'}
          iconPosition={'right'}
          status={'disabled'}
        />
        <AppButton
          onPress={() => setLocalStorageLanguage('ar')}
          size={15}
          textValue={'Change to AR'}
          icon={'cloud-rain'}
          iconPosition={'left'}
        />
        <AppText>Home Screen</AppText>
        <AppText appTextColor={'primary'}>{t('common.hello')}</AppText>
        <AppText appTextColor={'success'}>I AM success</AppText>
        <AppText appTextColor={'info'}>I AM info</AppText>
        <AppText appTextColor={'warning'}>I AM warning</AppText>
        <AppText appTextColor={'danger'}>I AM danger</AppText>
        <AppText appTextColor={'danger'}>I AM danger</AppText>
        <AppAvatar
          alt={'aj'}
          size={120}
          shape={'round'}
          source={{
            // uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            uri: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
          }}
        />
      </View>
    </MainLayout>
  );
};
