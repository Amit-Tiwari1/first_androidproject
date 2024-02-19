import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/Home.js';
import AppNevigator from './src/routes/AppNevigator.js';

export default function App() {
  return (
    <NavigationContainer>
      <AppNevigator />
    </NavigationContainer>
    
  );
}


