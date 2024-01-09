import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';

import Navigation from './src/components/Navigation';
import { MatchProvider } from './src/context/MatchContext';
import config from './tamagui.config';

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
    <TamaguiProvider config={config} defaultTheme="light">
      <MatchProvider>
        <Navigation />
      </MatchProvider>
    </TamaguiProvider>
  );
};

export default App;
