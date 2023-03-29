import * as React from 'react';
import {Text,View,Flatlist,Image,StyleSheet,TouchableOpacity} from 'react-native';
export default function BoloChocolate(){
  return(
    <View>
      <Text style={Styles.texto}>Bolo de Chocolate </Text>
      <Image source={require('../assets/boloChocolate.jpeg')} style={Styles.imagem} />
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
  texto:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35
  }
})
