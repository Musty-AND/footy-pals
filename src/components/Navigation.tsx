import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchDetailsScreen from '../screens/matchDetailsScreen';

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

const Navigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            options={{ tabBarTestID: 'home-tab' }}
            name="Find Matches"
            component={HomeStack}
          />
          <Tab.Screen
            options={{ tabBarTestID: 'settings-tab' }}
            name="Settingsssss fi dem"
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigation;
