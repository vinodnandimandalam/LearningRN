import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders NavigationContainer', () => {
    const { UNSAFE_root } = render(<App />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it('renders Home screen as initial route', () => {
    const { getByText } = render(<App />);
    // Home screen should be initial screen with navigation button
    expect(getByText('Go to Counter')).toBeTruthy();
  });
});
