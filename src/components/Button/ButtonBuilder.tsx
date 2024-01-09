import { getSize, getSpace } from '@tamagui/get-token';
import { cloneElement, useContext } from 'react';
import {
  GetProps,
  SizeTokens,
  Stack,
  Text,
  createStyledContext,
  styled,
  useTheme,
  withStaticProperties,
} from 'tamagui';

export const ButtonContext = createStyledContext({
  size: '$md' as SizeTokens,
});

export const ButtonFrame = styled(Stack, {
  name: 'Button',
  context: ButtonContext,
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  borderColor: '$color',
  borderWidth: 1,

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },

  variants: {
    size: {
      '...size': (name, { tokens }: any) => {
        return {
          height: tokens.size[name],
          borderRadius: tokens.radius[name],
          // note the getSpace and getSize helpers will let you shift down/up token sizes
          // whereas with gap we just multiply by 0.2
          // this is a stylistic choice, and depends on your design system values
          gap: tokens.space[name].val * 0.2,
          paddingHorizontal: getSpace(name, {
            shift: -1,
          }),
        };
      },
    },
  } as const,

  defaultVariants: {
    size: '$md',
  },
});

type ButtonProps = GetProps<typeof ButtonFrame>;

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  color: '$color',
  userSelect: 'none',

  variants: {
    size: {
      '...fontSize': (name, { font }: any) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
});

const ButtonIcon = (props: { children: any }) => {
  const { size } = useContext(ButtonContext.context);
  const smaller = getSize(size, {
    shift: -2,
  });
  const theme = useTheme();
  return cloneElement(props.children, {
    size: smaller.val * 0.5,
    color: theme.color.get(),
  });
};

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});
