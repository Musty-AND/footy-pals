import { useFonts } from 'expo-font';
import { useEffect } from 'react';

import Navigation from './src/components/Navigation';
import { MatchProvider } from './src/context/MatchContext';
import { TamaguiProvider } from './src/context/TamaguiContext';
import { ThemeProvider } from './src/context/ThemeContext';

const App = () => {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <TamaguiProvider>
        <MatchProvider>
          <Navigation />
        </MatchProvider>
      </TamaguiProvider>
    </ThemeProvider>
  );
};

export default App;
