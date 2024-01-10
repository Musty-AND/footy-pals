import React, { useContext, useState } from 'react';

import { ThemeContextType } from '../types';

const ThemeContext = React.createContext({} as ThemeContextType);

type props = any;

export const ThemeProvider = ({ children }: props) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Theme context must be used within Provider');
  return context;
};
