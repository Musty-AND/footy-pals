import { useEffect } from "react";
import Navigation from "./src/components/Navigation";
import { MatchProvider } from "./src/context/MatchContext";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
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
    <TamaguiProvider config={config} defaultTheme="dark">
      <MatchProvider>
        <Navigation />
      </MatchProvider>
    </TamaguiProvider>
  );
}
