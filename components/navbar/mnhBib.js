import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { Favoritos } from "../pageMnhBib/favoritos";
import { ListaDes } from "../pageMnhBib/listaDesejos";
import { MeusLivros } from "../pageMnhBib/meusLivros";
import {estilo} from '../estilo';
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
export function MnhBib({ navigation }) {
  return (
    <ScrollView style={estilo.background}>

      <TouchableOpacity onPress={() => navigation.navigate("Favoritos")} style={estilo.btnBusca}>
        <Text style={estilo.btnTxt}>Favoritos </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ListaDes")} style={estilo.btnBusca}>
        <Text style={estilo.btnTxt}>Lista de Desejos </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MeusLivros")} style={estilo.btnBusca}>
        <Text style={estilo.btnTxt}>Meus Livros</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
  const Stack = createStackNavigator();
export function RotasMnhBib() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="MnhBib"
        component={MnhBib}
        options={{ title: <Text>Aqui está sua Biblioteca <Ionicons name="ios-library" size={24} color="black" /></Text>,            headerTitleStyle: {
              fontFamily: 'RobotoSlabBold',
              textAlign: "left",
            },
            headerStyle: {
              backgroundColor: "#ede9c2",
              borderBottomWidth: 0.5,
              borderBottomColor: "#a37955",
            }, }}
      />
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ title: "Favoritos",headerTitleStyle: {
              fontFamily: 'RobotoSlabBold',
              textAlign: "left",
            },
            headerStyle: {
              backgroundColor: "#ede9c2",
              borderBottomWidth: 0.5,
              borderBottomColor: "#a37955",
            }, }}
      />
      <Stack.Screen
        name="ListaDes"
        component={ListaDes}
        options={{ title: "Lista de Desejos",headerTitleStyle: {
              fontFamily: 'RobotoSlabBold',
              textAlign: "left",
            },
            headerStyle: {
              backgroundColor: "#ede9c2",
              borderBottomWidth: 0.5,
              borderBottomColor: "#a37955",
            }, }}
      />
      <Stack.Screen
        name="MeusLivros"
        component={MeusLivros}
        options={{ title: "Meus Livros",headerTitleStyle: {
              fontFamily: 'RobotoSlabBold',
              textAlign: "left",
            },
            headerStyle: {
              backgroundColor: "#ede9c2",
              borderBottomWidth: 0.5,
              borderBottomColor: "#a37955",
            }, }}
      />
    </Stack.Navigator>
  );
}
