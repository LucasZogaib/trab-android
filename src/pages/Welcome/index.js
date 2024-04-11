import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation} from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();   

 return (
   <View style={styles.container}>

        <View style={styles.containerLogo}>
        <Animatable.Image
          animation="fadeInDown"
          source={require('../../assets/logo.png')}
          style={{width:400, height:400 }}
          resizeMode="contain"
        />
      </View>
    
       <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Faça reservas, tire dúvidas e muito mais!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity
        style={styles.button}
        onPress={ () => navigation.navigate('Login')}   //Mudar para Login depois 
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
       </Animatable.View>

   </View>

  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#050107'        //Trocar a cor para a da empresa
  },
  containerLogo:{
    flex:1,
    backgroundColor: '#050107',        //trocar a cor para a da empresa
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex:1,
    backgroundColor: '#050107',          //trocar cor para a da empresa
    paddingStart: '5%',
    paddingEnd: '5%',
    justifyContent: 'top'
  },
  title:{
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    textAlign: 'center',
  },
  text:{
    color: '#A1A1A1',
    textAlign: 'center'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#fb0601',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }

})