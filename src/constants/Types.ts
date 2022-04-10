export type AppButtonType = {
  size: number;
  status?: 'enabled' | 'disabled';
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
