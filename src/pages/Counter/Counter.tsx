import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  DECREMENT_BUTTON,
  getDisplayText,
  INCREMENT_BUTTON,
} from './Counter.constants';
import Button from '../../components/Button/Button';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCounter(prevCount => prevCount - 1);
  };

  return (
    <View>
      <Text>{getDisplayText(counter)}</Text>
      <Button title={INCREMENT_BUTTON} onPress={handleIncrement} />
      <Button title={DECREMENT_BUTTON} onPress={handleDecrement} />
    </View>
  );
};

export default Counter;
