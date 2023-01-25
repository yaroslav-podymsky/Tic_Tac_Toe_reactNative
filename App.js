import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import * as React from 'react';
import GameWindow from './screens/GameWindow';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tick-Tack-Toe'  , style: 'backgroundColor: red'}} />
        <Stack.Screen name="GameWindow" component={GameWindow} options={{ title: 'Tick-Tack-Toe' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


