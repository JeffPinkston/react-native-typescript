/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import { globalAppStyles } from './src/styles/styles';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

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