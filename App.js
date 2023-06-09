import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent={true} />
      <HomeScreen />
    </NavigationContainer>
  );
}
