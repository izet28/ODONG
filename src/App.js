import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Router from './Router';


const App = () => {
  return (
   <NavigationContainer>
     <Router/>
   </NavigationContainer> 
  )
}
export default App;
