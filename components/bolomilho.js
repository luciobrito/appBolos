import * as React from 'react';
import {Text,View,Flatlist,Image,StyleSheet,TouchableOpacity} from 'react-native';
 
export default function BoloMilho(){
  return(
    <View>
      <Text style={Styles.texto}>Bolo de Milho</Text>
      <Image source={require('../assets/boloMilho.jpeg')}
      style ={Styles.imagem}/>
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
