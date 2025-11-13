// Button should render with correct title passed to it
// Button should call the correct on press event handler passed to it

import Button from './Button';
import { fireEvent, render } from '@testing-library/react-native';

describe('Button Component', () => {
  const titleText = 'Click me';
  const onPressEventHandler = jest.fn();
  it('Should render correct button title', () => {
    const { getByText } = render(
      <Button title={titleText} onPress={() => {}} />,
    );

    expect(getByText(titleText)).toBeDefined();
  });

  it('Should call the on press event handler passed to the button', () => {
    const { getByText } = render(
      <Button title={titleText} onPress={onPressEventHandler} />,
    );

    const buttonEle = getByText(titleText);
    fireEvent.press(buttonEle);
    expect(onPressEventHandler).toHaveBeenCalledTimes(1);
  });
});
