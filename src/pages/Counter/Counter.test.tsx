import Counter from './Counter';
import { fireEvent, render } from '@testing-library/react-native';
import {
  DECREMENT_BUTTON,
  getDisplayText,
  INCREMENT_BUTTON,
} from './Counter.constants';

describe('Counter component', () => {
  it('Should render the correct initial count', () => {
    const { getByText } = render(<Counter />);
    expect(getByText(getDisplayText(0))).toBeDefined();
  });

  it('Should increment the count on pressing increment button', () => {
    const { getByText } = render(<Counter />);
    const incrementBtn = getByText(INCREMENT_BUTTON);
    fireEvent.press(incrementBtn);
    expect(getByText(getDisplayText(1))).toBeDefined();
  });

  it('Should decrement the count on pressing decrement button', () => {
    const { getByText } = render(<Counter />);
    const decrementBtn = getByText(DECREMENT_BUTTON);
    fireEvent.press(decrementBtn);
    expect(getByText(getDisplayText(-1))).toBeDefined();
  });
});
