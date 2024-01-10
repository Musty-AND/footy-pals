import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from 'tamagui';

import HomeScreen from '../screens/homeScreen';
import MatchDetailsScreen from '../screens/matchDetailsScreen';
import SettingsScreen from '../screens/settingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Match Details" component={MatchDetailsScreen} />
    </Stack.Navigator>
  );
};

type themeTypes = 'light' | 'dark';

const Navigation = () => {
  const { background, color, name } = useTheme();

  const backgroundColour = background.get();
  const textColour = color.get();
  const barStyle: 'light-content' | 'dark-content' = `${name as unknown as themeTypes}-content`;

  return (
    <NavigationContainer>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColour }}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: backgroundColour,
              borderTopColor: textColour,
              borderTopWidth: 1,
            },
            tabBarIconStyle: {
              color: textColour,
            },
          }}>
          <Tab.Screen name="Find Matches" component={HomeStack} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigation;
