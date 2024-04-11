import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation} from '@react-navigation/native'

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    //Fazer chamada no back-end para cadastro.
    //Descobrir como limito CPF para apenas números
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#050107' barStyle="light-content" />

      <Animatable.Image
      animation="fadeInDown"
      source={require('../../assets/logo.png')}
      style={{width:400,height:400}} 
      />

      <TextInput required="required" 
      placeholder="Seu nome..." style={styles.TextInput} 
      onChange={text=>setNome(text)} />
      <TextInput required="required" 
      placeholder="Seu e-mail..." style={styles.TextInput} 
      onChange={text=>setEmail(text)} />
      <TextInput required="required" maxLength={11} 
      placeholder="Seu CPF..." style={styles.TextInput} 
      onChange={text=>setCpf(text)} /> 
      <TextInput required="required" 
      secureTextEntry={true} placeholder="Sua senha..." 
      style={styles.TextInput} 
      onChange={text=>setSenha(text)} />

      <TouchableOpacity style={styles.btnCadastro} 
      onPress={()=>cadastro()}> 
        <Text style={{color:'white', textAlign:'center'}}>CADASTRAR!</Text>
      </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050107',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  TextInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10,
  },
  btnCadastro:{
    width:'100%',
    height:40,
    backgroundColor:'#fb0601',
    borderRadius:20,
    justifyContent:'center'
  }
});
