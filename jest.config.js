// jest.config.js
module.exports = {
  preset: 'react-native',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|@react-navigation|react-native-safe-area-context|react-redux|@reduxjs|@reduxjs/toolkit|immer)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
  moduleNameMapper: {
    '^immer$': '<rootDir>/node_modules/immer/dist/cjs/immer.cjs.development.js',
    '^@reduxjs/toolkit$':
      '<rootDir>/node_modules/@reduxjs/toolkit/dist/cjs/index.js',
    '^react-redux$': '<rootDir>/node_modules/react-redux/dist/cjs/index.js',
  },
  // Add this to ensure console is available
  testEnvironment: 'node',
};
