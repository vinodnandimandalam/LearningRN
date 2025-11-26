/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, useColorScheme } from 'react-native';
import HomeScreen from './src/pages/Home/HomeScreen';
import Counter from './src/pages/Counter/Counter';
import { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? '#000000' : '#ffffff',
          },
          headerTintColor: isDarkMode ? '#ffffff' : '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="Counter"
          component={Counter}
          options={{
            title: 'Counter',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
