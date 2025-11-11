/* eslint-env jest */
// jest.setup.js
import '@testing-library/jest-native/extend-expect';

// Silence RN Animated: `useNativeDriver` warnings during tests
jest.mock('react-native/Libraries/Animated/NativeAnimatedModule');
