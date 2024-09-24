import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, StyleSheet   } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.img}/>
      </View>
      <View style={styles.containerEntrada}>
        <Text style={styles.textos}>
          Álcool (preço por litro):
        </Text>
        <TextInput placeholder="Digite a quantidade em litros" keyboardType="numeric" style={styles.textInput} />
        <Text style={styles.textos}>
          Gasolina (preço por litro):
        </Text>
        <TextInput placeholder="Digite a quantidade em litros" keyboardType="numeric" style={styles.textInput}/>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.areaBtn}>
          <Text style={styles.textoBtn}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  containerImg: {

  },
  img:{
    
  },
  containerEntrada: {
    alignItems: 'center',
  },
  textInput:{
    width: '80%',
    height: 40,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  textos: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 10
  },
  containerBtn: {

  },
  areaBtn: {

  },
  textoBtn: {

  }
})