import React from 'react';
import { TamaguiProvider as TProvider } from 'tamagui';

import { useThemeContext } from './ThemeContext';
import config from '../../tamagui.config';

type props = any;

export const TamaguiProvider = ({ children }: props) => {
  const { isDarkTheme } = useThemeContext();

  return (
    <TProvider config={config} defaultTheme={isDarkTheme ? 'dark' : 'light'}>
      {children}
    </TProvider>
  );
};
