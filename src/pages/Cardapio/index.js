import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

import { useNavigation} from '@react-navigation/native'

export default function Cardapio() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#26333B' barStyle="light-content" />

      <TouchableOpacity style={styles.btnHome} 
      onPress={() => navigation.navigate('Home')}>
      <Text style={styles.voltarButton}><AntDesign name="back" size={12} color="white" />  HOME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLogOut}
      onPress={()=>Home()}>
      <Ionicons name="log-out-outline" size={18} color="white" />
      </TouchableOpacity>

      <Text style={styles.titulo}>CARDÁPIO</Text>
      
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Pizzas')}>
          <Image source={require('../../assets/pizzas.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>VER PIZZA'S</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Massas')}>
          <Image source={require('../../assets/massas.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>VER MASSAS</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Petiscos')}>
          <Image source={require('../../assets/isca.jpg')} style={styles.menuImage} />
          <Text style={styles.menuText}>VER PETISCOS</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Doces')}>
          <Image source={require('../../assets/doces.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>VER DOCES</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.favoritosContainer}>
        <Text style={styles.favoritosTitle}>OS FAVORITOS</Text>
        </View>
        
          <Text style={styles.favoritosItem}>• LASANHA 4 QUEIJOS</Text>
          <Text style={styles.favoritosItem}>• LASANHA BOLONHESA</Text>
          <Text style={styles.favoritosItem}>• FRANGO A PASSARINHO</Text>
          <Text style={styles.favoritosItem}>• BACON COM CHEDDAR</Text>
          <Text style={styles.favoritosItem}>• CALABRESA ESPECIAL</Text>
          <Text style={styles.favoritosItem}>• FRANGO COM CATUPIRY</Text>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  voltarButton: {
    color: 'white', 
    fontSize: 11 
  },
  container: {
    flex: 1,
    backgroundColor: '#26333B',
    padding: 20,
  },
  titulo: {
    color: 'white',
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
    top: '8%'
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
    top: '28%',
  },
  menuItem: {
    alignItems: 'center',
    marginBottom: 20,
    width: '45%',
  },
  menuImage: {
    width: 130,
    height: 130,
    borderRadius: 50,
    borderColor: '#FF5757',
    borderWidth: 3,
  },
  menuText: {
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  favoritosContainer: {
    borderRadius: 10,
    padding: 10,
    top: '13%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',   
  },
  favoritosTitle: {
    backgroundColor: '#FF5757',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10
  },
  favoritosItem: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    top: '15%',
    textAlign: 'center'
  },
  btnLogOut: {
    position: 'absolute',
    right: 20,
    top: 20
  },
});
