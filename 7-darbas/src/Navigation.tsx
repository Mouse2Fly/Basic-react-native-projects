import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './HomeScreen';
import DataScreen from './DataScreen';
import DetailsScreen from './DetailsScreen';
import { Button } from 'react-native';

export type RootStackParamList = {
    Home: undefined;
    Data: undefined;
    Details: {title:string, body:string};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Pradzia'}}/>
        <Stack.Screen name="Data" component={DataScreen} options={{title:'Straipsniai'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={({route, navigation}) => ({
            title: route.params.title,
            headerRight: () => (
              <Button
                onPress={() => alert('Straipsnio autorius: vartotojas #' + route.params.userId)}
                title="Daugiau"
              />),
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}