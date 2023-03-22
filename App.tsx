/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import { globalAppStyles } from './src/styles/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types/types';
import 'react-native-gesture-handler';

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      {
        <SafeAreaView style={globalAppStyles.container}>
          <RootStack.Navigator initialRouteName="Home">
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Details" component={Details} />
          </RootStack.Navigator>
        </SafeAreaView>
      }
    </NavigationContainer>

  );
}