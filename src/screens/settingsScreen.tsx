import React from 'react';
import { Stack, Text } from 'tamagui';

import Button from '../components/Button';
import { useThemeContext } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Stack backgroundColor="$background" paddingHorizontal="$sm" flex={1}>
      <Text> Settings Screen</Text>
      <Button text="change theme???" onPress={toggleTheme} />
    </Stack>
  );
};

export default SettingsScreen;
