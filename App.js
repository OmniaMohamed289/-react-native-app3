import React from 'react';
import Home from './src/Components/screens/home/index';
import open from './src/Components/screens/open';
import ProductDetails from './src/Components/screens/ProductDetails/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="open">
         <Stack.Screen name="open" component={open}   options={{ headerShown: false }}
/>
        <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
