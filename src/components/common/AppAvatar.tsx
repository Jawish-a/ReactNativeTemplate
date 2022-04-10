import { Pressable, ImageProps, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { AppText } from './AppText';
import { colors } from '../../assets/theme/colors';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { typography } from '../../assets/theme/typography';

const calcBorderRaduis = (
  shape: AppAvatarType['shape'],
  size: AppAvatarType['size'],
): number => {
  if (shape === 'square') return 0;
  if (shape === 'rounded') return size / 5;
  return size / 2;
};

type AppAvatarType = {
  size: number;
  shape?: 'round' | 'rounded' | 'square';
  alt: string;
};

export const AppAvatar: React.FC<FastImageProps & AppAvatarType> = ({
  source,
  size,
  alt,
  shape = 'round',
}) => {
  const [fallback, setFallback] = useState(false);
  //check if the image can be loaded

  if (fallback)
    return (
      <View
        style={{
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: calcBorderRaduis(shape, size),
          backgroundColor: colors.violet[300],
        }}>
        <AppText
          style={{
            color: colors.theme.white,
            textTransform: 'uppercase',
            ...typography.s1,
            fontSize: size / 3,
          }}>
          {alt}
        </AppText>
      </View>
    );
  // everything is fine and the app avatar is working fin
  return (
    <FastImage
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: calcBorderRaduis(shape, size),
        backgroundColor: colors.violet[300],
      }}
      source={source}
      onError={() => setFallback(true)}
    />
  );
};
