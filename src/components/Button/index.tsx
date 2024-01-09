import { SizeTokens } from 'tamagui';

import { Button as TButton } from './ButtonBuilder';

type ButtonProps = {
  text: string;
  onPress?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: SizeTokens;
};

const Button = ({ text, leftIcon, rightIcon, size = '$md', onPress }: ButtonProps) => (
  <TButton size={size} onPress={onPress}>
    {leftIcon && <TButton.Icon>{leftIcon}</TButton.Icon>}
    <TButton.Text>{text}</TButton.Text>
    {rightIcon && <TButton.Icon>{rightIcon}</TButton.Icon>}
  </TButton>
);

export default Button;
