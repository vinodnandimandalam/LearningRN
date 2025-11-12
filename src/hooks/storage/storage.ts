import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadValue = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        const value = item ? JSON.parse(item) : initialValue;
        setStoredValue(value);
      } catch {
        setStoredValue(initialValue);
      } finally {
        setIsLoaded(true);
      }
    };
    loadValue();
  }, [key, initialValue]);

  const setItem = useCallback(
    async (value: unknown) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      } catch {
        console.log('error');
      }
    },
    [key, storedValue],
  );

  const removeItem = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch {
      console.log('error');
    }
  }, [key]);

  const getItem = () => storedValue;

  return {
    value: storedValue,
    isLoaded,
    setItem,
    getItem,
    removeItem,
  };
};

export { useLocalStorage };
