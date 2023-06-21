import * as React from 'react';
import{Text, View, StyleSheet,TouchableOpacity,FlatList,Image,ScrollView,Pressable, SafeAreaView} from 'react-native';
import {livroRec} from '../catalogo';
import {estilo} from '../estilo';
export function Recomendados(){
  return(

    <ScrollView>
            <SafeAreaView style={estilo.background}
        //Importante para o numColumns={n} funcionar.
        >
        <Text style={estilo.subtitulo}>Melhores Recomendações</Text>
          <FlatList
            data={livroRec}
            renderItem={({ item, index }) => (
              <View style={estilo.bscrcont}>
                <Image source={{ uri: item.capa }} style={estilo.bscrImg} />
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "RobotoSlabBold",
                    color: "#634107",
                    marginTop: 5,
                    width: "100%",
                    fontSize: 15,
                    padding: 3
                  }}
                >
                  {item.nome}
                  {"\n"}
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: "RobotoSlabBold",
                      color: "#5e5e5d",
                      fontSize: 10
                    }}
                  >
                    {item.autor}
                  </Text>
                </Text>
              </View>
            )}
            //Número de Colunas da lista,importante para fazer o efeito de grade.
            numColumns={2}
          />
        </SafeAreaView>
    </ScrollView>
  )
}