import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, StyleSheet } from "react-native";

export default function App() {
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  function calcular() {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!precoAlcool || !precoGasolina) {
      setResultado('Por Favor Preencha os Campos!');
      return;
    }

    const proporcao = precoAlcool / precoGasolina;
    if (proporcao <= 0.7) {
      setResultado('Álcool é a melhor opção');
    } else {
      setResultado('Gasolina é a melhor opção');
    }

    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require('./src/assets/logo.png')} style={styles.img} />
        <Text style={styles.textoImg}>Qual é a melhor opção?</Text>
      </View>
      <View style={styles.containerEntrada}>
        <Text style={styles.textos}>
          Álcool (preço por litro):
        </Text>
        <TextInput
          placeholder="Digite a quantidade em litros"
          keyboardType="numeric"
          value={gasolina}
          onChangeText={(text) => setGasolina(text)}
          style={styles.textInput}
        />
        <Text style={styles.textos}>
          Gasolina (preço por litro):
        </Text>
        <TextInput
          placeholder="Digite a quantidade em litros"
          keyboardType="numeric"
          value={alcool}
          onChangeText={(text) => setAlcool(text)}
          style={styles.textInput}
        />
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity onPress={calcular} style={styles.areaBtn}>
          <Text style={styles.textoBtn}>Calcular</Text>
        </TouchableOpacity>
      </View>
      {resultado !== '' && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View>
                <Image source={require('./src/assets/gas.png')} />
              </View>
              <Text style={styles.textResultado}>{resultado}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
    marginBottom: 40,
  },
  img: {
    width: 200,
    height: 200,
  },
  textoImg: {
    color: '#fff',
    fontSize: 24,
  },
  containerEntrada: {
    alignItems: 'center',
  },
  textInput: {
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
    marginBottom: 4,
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
    padding: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    width: 300,
    backgroundColor: '#484848',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textResultado: {
    fontSize: 24,
    marginBottom: 15,
    color: '#30ef5a',
  },
  modalButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
