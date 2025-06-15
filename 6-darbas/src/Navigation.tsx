import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './HomeScreen';
import DataScreen from './DataScreen';
import DetailsScreen from './DetailsScreen';

export type RootStackParamList = {
    Home: undefined;
    Data: undefined;
    Details: {title:string, body:string};
};

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Data" component={DataScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}