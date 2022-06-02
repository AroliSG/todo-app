/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  Text,
  View,
} from 'react-native';

import LandingPage from './src/screens/LandingPage';

const Stack = createNativeStackNavigator ();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name      = "Home" 
          component = {LandingPage}
          options   = {{
            headerStyle: {
              backgroundColor: '#a599b5'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
