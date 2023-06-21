import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { estilo } from '../estilo';
var dat = new Date();
var hora = dat.getDate();
//Função para exibir a mensagem conforme o horário do Usuário
var citacao = [
  '“A leitura é o caminho mais curto para o conhecimento”. — Aristóteles',
  '“Uma vida sem leitura é uma vida sem esperança”. — George Orwell',
  '“Ler mudou, muda e continuará mudando o mundo”. — Virginia Woolf',
  '“Meus filhos terão computadores, sim, mas antes terão livros. Sem livros, sem leitura, nossos filhos serão incapazes de escrever inclusive a própria história”. — Bill Gates',
  '“É preciso que a leitura seja um ato de amor”. — Paulo Freire',
  '“Sempre imaginei que o paraíso fosse uma espécie de biblioteca”. — Jorge Luis Borges',
  '“O importante é motivar a criança para a leitura, para a aventura de ler”. — Ziraldo',
  '“A leitura engrandece a alma”. — Voltaire',
  '“A leitura é, provavelmente, uma outra maneira de estar em um lugar”. — José Saramago',
  ' “Não há problema que a leitura não possa solucionar”. — Charles Bukowski',
  '“Um livro é um sonho que você segura na mão”. — Neil Gaiman',
  '“Leitura, antes de mais nada é estímulo, é exemplo”. — Ruth Rocha',
];
var mensagem = '';
var submensagem = '';
if (hora > 6 && hora < 12) {
  mensagem = 'Bom Dia!';
  submensagem = 'Está um ótimo dia para ler!';
} else if (hora >= 12 && hora < 18) {
  mensagem = 'Boa Tarde';
  submensagem = 'O melhor horário para leitura!';
} else if (hora >= 18 && hora < 23) {
  mensagem = 'Boa Noite!';
  submensagem = 'Fim do dia, início da leitura!';
} else if (hora >= 23) {
  mensagem = 'Boa Madrugada! ';
  submensagem = 'Ler ajuda com a insônia!';
}
var aleatorio = Math.floor(Math.random() * citacao.length);

export function Home({ navigation }) {
  return (
    <View style={estilo.background}>
      <Text style={estilo.tituloInicio}> {mensagem} </Text>
      <Text style={estilo.submensagem}>{submensagem}</Text>
      <Text style={estilo.citacao}>{citacao[aleatorio]}</Text>
      <ScrollView horizontal={true}></ScrollView>
    </View>
  );
}
