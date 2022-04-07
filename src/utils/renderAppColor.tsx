// const isDarkMode = useColorScheme() === 'dark';

import { colors } from '../assets/theme/colors';

type RenderAppColorType = {
  isDarkMode: boolean;
  color?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
};
type RenderAppColorValueType = {
  ['color']: string;
};

export const renderAppColor = (
  isDarkMode: RenderAppColorType['isDarkMode'],
  color: RenderAppColorType['color'],
): RenderAppColorValueType => {
  if (!!color) return { color: colors.theme[color] };
  return isDarkMode
    ? { color: colors.theme.white }
    : { color: colors.theme.black };
};
