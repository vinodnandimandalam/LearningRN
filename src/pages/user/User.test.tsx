import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react-native';

import userReducer from '../../state/user/user-slice';
import UserDetails from './User';
import { SecondaryUser } from '../../state/types';

type UserState = {
  user: SecondaryUser | null;
  status: string;
  error: string | null;
};

const defaultState: UserState = { user: null, status: 'idle', error: null };

const renderWithProviders = (
  component: React.ReactElement,
  preloadedState?: Partial<UserState>,
) => {
  const state = { ...defaultState, ...preloadedState };

  const store = configureStore({
    reducer: { user: userReducer },
    preloadedState: { user: state },
  });

  return render(<Provider store={store}>{component}</Provider>);
};

describe('UserDetails', () => {
  it('shows loading state when status is loading', () => {
    const { getByTestId } = renderWithProviders(<UserDetails userId={0} />, {
      status: 'loading',
    });

    expect(getByTestId('loading-state')).toBeTruthy();
  });

  it('shows error state when status is failed', () => {
    const { getByTestId } = renderWithProviders(<UserDetails userId={0} />, {
      status: 'failed',
    });

    expect(getByTestId('error-state')).toBeTruthy();
  });

  it('renders user name when data is available', () => {
    const { getByText } = renderWithProviders(<UserDetails userId={0} />, {
      user: { id: 1, name: 'John Doe', email: 'john@example.com' },
      status: 'succeeded',
    });

    expect(getByText('John Doe')).toBeTruthy();
  });

  it('renders fallback text when no user found', () => {
    const { getByText } = renderWithProviders(<UserDetails userId={0} />);

    expect(getByText('No user founc')).toBeTruthy();
  });
});
