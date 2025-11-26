// Metro console shim - provides console as a module for packages that require it
// In React Native, console is a global, not a module
module.exports = global.console || console;

