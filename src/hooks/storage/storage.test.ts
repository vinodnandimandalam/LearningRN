jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

import { renderHook, waitFor, act } from '@testing-library/react-native';
import { useLocalStorage } from './storage';

const AsyncStorage = jest.requireMock(
  '@react-native-async-storage/async-storage',
);

beforeEach(async () => {
  AsyncStorage.getItem.mockClear();
  AsyncStorage.setItem.mockClear();
  AsyncStorage.removeItem.mockClear();
  if (AsyncStorage.clear) {
    await AsyncStorage.clear();
  }
});

const TEST_KEY = 'user_token';
const DEFAULT_VALUE = 'guest_token';
const UPDATED_VALUE = 'updated_token';

describe('Async storage', () => {
  it('Should initialize the default value and mark isLoaded as false', async () => {
    const { result } = renderHook(() =>
      useLocalStorage(TEST_KEY, DEFAULT_VALUE),
    );

    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    expect(result.current.value).toBe(DEFAULT_VALUE);
    expect(result.current.isLoaded).toBe(true);
  });

  it('Should update the value using setItem function', async () => {
    const { result } = renderHook(() =>
      useLocalStorage(TEST_KEY, DEFAULT_VALUE),
    );

    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    await act(async () => {
      await result.current.setItem(UPDATED_VALUE);
    });

    expect(result.current.value).toBe(UPDATED_VALUE);
  });

  it('Should return the value using getItem function', async () => {
    const { result } = renderHook(() =>
      useLocalStorage(TEST_KEY, DEFAULT_VALUE),
    );

    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    expect(result.current.getItem()).toBe(DEFAULT_VALUE);
  });

  it('Should delete the key value pair using removeItem function', async () => {
    const { result } = renderHook(() =>
      useLocalStorage(TEST_KEY, DEFAULT_VALUE),
    );
    await waitFor(() => expect(result.current.isLoaded).toBe(true));
    await act(async () => {
      await result.current.removeItem();
    });

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(TEST_KEY);
  });
});
