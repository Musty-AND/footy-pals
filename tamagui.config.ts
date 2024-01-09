import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  purple,
  purpleDark,
  red,
  redDark,
  yellow,
  yellowDark,
  whiteA,
  blackA,
} from '@tamagui/colors';
import { Variable, createTamagui, createTokens } from 'tamagui';

export const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
};

export const colorTokens = {
  light: {
    blue,
    gray,
    green,
    orange,
    pink,
    purple,
    red,
    yellow,
    whiteA,
    blackA,
  },
  dark: {
    blue: blueDark,
    gray: grayDark,
    green: greenDark,
    orange: orangeDark,
    pink: pinkDark,
    purple: purpleDark,
    red: redDark,
    yellow: yellowDark,
    whiteA,
    blackA,
  },
};

export const darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow,
  ...colorTokens.dark.blackA,
};

export const lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow,
  ...colorTokens.light.whiteA,
};

export const color = {
  ...postfixObjKeys(lightColors, 'Light'),
  ...postfixObjKeys(darkColors, 'Dark'),
};

function postfixObjKeys<A extends { [key: string]: Variable<string> | string }, B extends string>(
  obj: A,
  postfix: B,
): {
  [Key in `${keyof A extends string ? keyof A : never}${B}`]: Variable<string> | string;
} {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v])) as any;
}

const tamaguiConfig = createTamagui({
  tokens: createTokens({
    size: {
      sm: 38,
      md: 46,
      true: 46,
      lg: 60,
    },
    space: {
      sm: 15,
      md: 20,
      true: 20,
      lg: 25,
    },
    radius: {
      sm: 4,
      md: 8,
      true: 8,
      lg: 12,
    },
    color,
    zIndex: {
      sm: 16,
      md: 24,
      true: 24,
      lg: 32,
    },
    icon: {
      sm: 16,
      md: 24,
      lg: 32,
    },
    fontWeight: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      true: 400,
      7: 700,
    },
  }),
  themes: {
    light: {
      background: '#fff',
      color: '#000',
    },
    light_Button: {
      background: color.purple3Light,
      backgroundPress: color.purple4Light, // darker background on press
      backgroundHover: color.purple2Light, // lighter background on hover
      color: color.purple12Light,
      borderColor: color.purple12Light,
    },
    light_Tile: {
      backgroundPress: color.gray4Light, // Darker background on press
      backgroundHover: color.gray2Light, // lighter background on hover
      borderColor: '#000',
      shadowColor: '#000',
    },
    light_Numbers: {
      background: '#d2c4d5',
    },
    dark: {
      background: '#151515',
      color: '#fff',
    },
    dark_Button: {
      backgroundPress: color.purple12Light, // darker background on press
      backgroundHover: color.purple10Light, // lighter background on hover
      borderColor: color.purple10Light,
    },
    dark_Tile: {
      background: color.purple2Dark,
      backgroundPress: color.purple1Dark, // darker background on press
      backgroundHover: color.purple3Dark, // lighter background on hover
      borderColor: color.purple11Light,
      shadowColor: color.purple11Light,
    },
    dark_Numbers: {
      background: 'green',
    },
  },
});

type AppConfig = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
export default tamaguiConfig;
// depending on if you chose tamagui, @tamagui/core, or @tamagui/web

// be sure the import and declare module lines both use that same name
