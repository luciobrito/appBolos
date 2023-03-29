import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Bolochocolate from './bolochocolate';
import Bolofuba from './bolofuba';
import Bolomilho from './bolomilho';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="BoloChocolate" component={Bolochocolate}/>
        <Stack.Screen name="BoloFuba" component={Bolofuba}/>
        <Stack.Screen name="BoloMilho" component={Bolomilho}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
}