import { cloneElement, useContext } from 'react';
import { getSize } from '@tamagui/get-token';
import { SizeTokens, useTheme } from 'tamagui';

type ButtonIconProps = {
  children: any;
  size: SizeTokens;
};
const ButtonIcon = ({ children, size }: ButtonIconProps) => {
  const smaller = getSize(size, {
    shift: -2,
  });
  const theme = useTheme();
  return cloneElement(children, {
    size: smaller.val * 0.5,
    color: theme.color.get(),
  });
};

type IconProps = {
  icon: React.ReactNode;
  size?: SizeTokens;
};
const Icon = ({ icon, size = '$md' }: IconProps) => <ButtonIcon size={size}>{icon}</ButtonIcon>;

export default Icon;
