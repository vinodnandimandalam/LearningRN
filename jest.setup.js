/* eslint-env jest */
// jest.setup.js
import '@testing-library/jest-native/extend-expect';

// Mock console if not available
if (typeof global.console === 'undefined') {
  global.console = {
    log: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    trace: jest.fn(),
    group: jest.fn(),
    groupEnd: jest.fn(),
    groupCollapsed: jest.fn(),
    time: jest.fn(),
    timeEnd: jest.fn(),
    assert: jest.fn(),
  };
}

// Silence RN Animated: `useNativeDriver` warnings during tests
jest.mock('react-native/Libraries/Animated/NativeAnimatedModule');
