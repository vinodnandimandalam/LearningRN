const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Provide console as a module for packages that require it
    extraNodeModules: {
      console: path.resolve(__dirname, 'metro-console-shim.js'),
    },
    // Exclude test files from bundle
    blockList: [
      /.*\/__tests__\/.*/,
      /.*\.test\.(js|ts|tsx)$/,
      /.*\.spec\.(js|ts|tsx)$/,
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
