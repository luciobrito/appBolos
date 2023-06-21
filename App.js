import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Rotas from './components/navbar/rotas';
import * as NavigationBar from 'expo-navigation-bar';
NavigationBar.setBackgroundColorAsync("#ede9c2");
import {useFonts} from 'expo-font';
export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoSlab' : require('./assets/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf'),
  });
  if(!fontsLoaded){
    return (
      <><Text>Carregando...</Text></>
    )
  }
  else{
  return (
    <>
    <Rotas></Rotas>
    </>
  );}
}