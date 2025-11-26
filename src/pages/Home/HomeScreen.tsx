import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Button from '../../components/Button/Button';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleNavigateToCounter = (): void => {
    navigation.navigate('Counter');
  };

  return (
    <View style={styles.container}>
      <Button title="Go to Counter" onPress={handleNavigateToCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
