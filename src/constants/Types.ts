import React, {
  ReactChild,
  ReactChildren,
  ReactComponentElement,
  ReactNode,
} from 'react';
import { ImageProps, ImageStyle, StyleProp } from 'react-native';
import {
  FastImageProps,
  FastImageStaticProperties,
} from 'react-native-fast-image';

export type AppButtonType = {
  size: number;
  isEnabled?: boolean;
  textValue: string;
  onPress: () => {};
  icon?: string;
  iconPosition?: 'left' | 'right';
};

export type AppButtonIconComonentType = {
  size: number;
  position: 'left' | 'right';
  iconName: string | undefined;
  iconColor?: string;
};

type FunctionType = {
  action: () => any;
};

export type AppButtonGroupType = {
  action: (() => any)[];
  textValue: string[];
  isEnabled: boolean[];
  size: number;
};

export type AppCardType = {
  headerText?: string;
  headerImage?: string;
  headerImageHeight?: number;
  footerComponent?: ReactNode;
};

export type AppEmptySpaceType = {
  height?: number;
  width?: number;
};
