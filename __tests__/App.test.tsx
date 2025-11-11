import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders the app root', () => {
    render(<App />);
    // Adjust the text to something that actually appears in your App
    // Example if your App shows "Welcome":
    // expect(screen.getByText(/welcome/i)).toBeTruthy();
  });
});
