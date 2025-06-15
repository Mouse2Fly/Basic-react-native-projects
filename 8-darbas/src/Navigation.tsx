import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './HomeScreen';
import ModalScreen from './ModalScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Pradzia'}}/>
        <Stack.Screen name="Modal" component={ModalScreen} options={{title:'Isskylantis langas'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}