import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <View>
      <Text style={Styles.titulo}>As melhores receitas de bolo</Text>
      <TouchableOpacity style={Styles.botao}
        onPress={() => {
          props.navigation.navigate('BoloChocolate');
        }}>
        <Text>Bolo de Chocolate</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={Styles.botao}      onPress={() => {
          props.navigation.navigate('BoloFuba');
        }}>
        <Text>Bolo de Fuba</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.botao}
              onPress={() => {
          props.navigation.navigate('BoloMilho');
        }}>
        <Text>Bolo de Milho</Text>
      </TouchableOpacity>
    </View>
  );
}
const Styles = StyleSheet.create({
  imagem:{
    width: 300,
    height: 300,
    borderRadius: 5,
    margin: 17
  },
  botao:{
    backgroundColor: '#c4c4c4',
    padding: 20,
    margin: 4,
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    margin: 25
  }

})


