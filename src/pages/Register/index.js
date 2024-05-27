import { StatusBar, Alert } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation} from '@react-navigation/native'

export default function App() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')


  const handleCpfChange = (text) => {
    const numericText = text.replace(/\D/g, '');
    setCpf(numericText);
  };

  const cadastro = async () => {
    const data = {
      nome,
      email,
      cpf,
      senha
    }
      console.log(data);
  
    if (nome === '' || email === '' || cpf === '' || senha === '') {
      Alert.alert('Erro', 'Todos os campos são obrigatórios');
      return;
    }

    try {
      const response = await fetch('https://seu-backend.com/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          cpf,
          senha,
        }),
      });

      const data = await response.json();
      

      if (response.ok) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', data.message || 'Houve um problema no cadastro');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar o cadastro');
    }
  };
  

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#26333B' barStyle="light-content" />

      <Animatable.Image
      animation="fadeInDown"
      source={require('../../assets/logo.png')}
      style={{width:400,height:400}} 
      />

      <TextInput 
      required="required" 
      placeholder="Seu nome..." 
      style={styles.TextInput} 
      onChangeText={setNome} 
      value={nome} />
      
      <TextInput 
      required="required" 
      placeholder="Seu e-mail..." 
      style={styles.TextInput} 
      onChangeText={setEmail} 
      value={email} />
      
      <TextInput 
      required="required" 
      maxLength={11} 
      placeholder="Seu CPF..." 
      style={styles.TextInput}
      keyboardType="numeric"
      onChangeText={handleCpfChange} 
      value={cpf} /> 
      
      <TextInput 
      required="required" 
      secureTextEntry={true} 
      placeholder="Sua senha..." 
      style={styles.TextInput} 
      onChangeText={setSenha}
      value={senha} />

      <TouchableOpacity style={styles.btnCadastro} 
      onPress={()=>cadastro()}> 
        <Text style={{color:'white', textAlign:'center'}}>CADASTRAR!</Text>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text
          style={styles.goLog}>Já tem uma conta?</Text>

          <TouchableOpacity
          style={styles.goLogButton}
          onPress={ () => navigation.navigate('Login')}
          >
            <Text style={styles.goLogText}>    Entre Agora!</Text>
          </TouchableOpacity>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26333B',
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
    backgroundColor:'#FF5757',
    borderRadius:20,
    justifyContent:'center'
  },
  bottomContainer:{
    flexDirection:'row',
    top:'10%'
  },
  goLog:{
    color: '#ffffff'
  },
  goLogText:{
    color: '#ffffff',
    fontWeight: 'bold',
  }
});
