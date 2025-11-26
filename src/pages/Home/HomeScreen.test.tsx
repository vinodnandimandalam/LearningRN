import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Counter from '../Counter/Counter';
import { RootStackParamList } from '../../navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const TestNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Counter" component={Counter} />
    </Stack.Navigator>
  </NavigationContainer>
);

describe('HomeScreen', () => {
  it('renders a button with text "Go to Counter"', () => {
    const { getByText } = render(<TestNavigator />);
    expect(getByText('Go to Counter')).toBeTruthy();
  });

  it('navigates to Counter screen when button is pressed', () => {
    const { getByText } = render(<TestNavigator />);

    const button = getByText('Go to Counter');
    fireEvent.press(button);

    // After navigation, Counter screen should be visible
    // Check for Counter-specific content (the counter display)
    expect(getByText(/Count 0/i)).toBeTruthy();
  });
});
