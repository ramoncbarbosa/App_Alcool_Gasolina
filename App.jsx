import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, StyleSheet   } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require('./src/assets/logo.png')} style={styles.img}/>
        <Text style={styles.textoImg}>Qual é a melhor opção?</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  img:{
    width: 200,
    height: 200
  },
  textoImg: {
    color: '#fff',
    fontSize: 24,
  },
  containerEntrada: {
    alignItems: 'center',
  },
  textInput:{
    width: '80%',
    height: 40,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  textos: {
    color: '#fff',
    fontSize: 18,
    paddingTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: 4
  },
  containerBtn: {
    alignItems: 'center',
    marginTop: 10,
  },
  areaBtn: {
    backgroundColor: '#ef422e',
    width: '40%',
    height: '22%',
    borderRadius: 4,
  },
  textoBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 5
  }
})