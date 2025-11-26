export type RootStackParamList = {
  Home: undefined;
  Counter: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
