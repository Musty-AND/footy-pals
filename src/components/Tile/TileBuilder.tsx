import { getSpace, getSize } from '@tamagui/get-token';
import { useContext, cloneElement } from 'react';
import {
  SizeTokens,
  Stack,
  Text,
  createStyledContext,
  styled,
  useTheme,
  withStaticProperties,
} from 'tamagui';

export const TileContext = createStyledContext({
  size: '$md' as SizeTokens,
});

export const HR = styled(Stack, {
  name: 'TileHR',
  context: TileContext,
  height: 1,
  backgroundColor: '$color',
});

export const MatchInfo = styled(Stack, {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const MatchCreator = styled(Stack, {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 5,
});

export const NumbersContainer = styled(Stack, {
  name: 'Numbers',
  context: TileContext,
  backgroundColor: '$background',
  paddingHorizontal: 8,
  paddingVertical: 5,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
});

export const TileFrame = styled(Stack, {
  name: 'Tile',
  context: TileContext,
  backgroundColor: '$background',
  flexDirection: 'column',

  borderTopColor: '$borderColor',
  borderTopWidth: 3,
  flex: 1,
  shadowColor: '$shadowColor',
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,

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
          // note the getSpace and getSize helpers will let you shift down/up token sizes
          // whereas with gap we just multiply by 0.2
          // this is a stylistic choice, and depends on your design system values
          gap: getSpace(name, {
            shift: -1,
          }),
          paddingHorizontal: getSpace(name, {
            shift: -1,
          }),
          paddingVertical: getSpace(name, {
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

const ButtonIcon = (props: { children: any }) => {
  const { size } = useContext(TileContext.context);
  const smaller = getSize(size, {
    shift: -2,
  });
  const theme = useTheme();
  return cloneElement(props.children, {
    size: smaller.val * 0.5,
    color: theme.color.get(),
  });
};

export const TileText = styled(Text, {
  name: 'TileText',
  context: TileContext,
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

export const Tile = withStaticProperties(TileFrame, {
  Props: TileContext.Provider,
  Text: TileText,
  Icon: ButtonIcon,
  HR,
  Numbers: NumbersContainer,
});
