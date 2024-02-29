import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const CustomButton = ({ buttonText, imageSource, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius, textStyle, buttonColor, onPress }) => {
  return (
    
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          borderTopLeftRadius: borderTopLeftRadius || 0,
          borderTopRightRadius: borderTopRightRadius || 0,
          borderBottomLeftRadius: borderBottomLeftRadius || 0,
          borderBottomRightRadius: borderBottomRightRadius || 0,
        },
      ]}
      onPress={onPress}
    >
      <Image source={imageSource} style={styles.buttonImage} />
      <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kategori</Text>
      <View style={styles.row}>
        <View style={[styles.boxContainer, { backgroundColor: '#B77B9A' }]}>
          <CustomButton
            buttonText="Matematika"
            imageSource={require('../../assets/math.jpg')}
            borderTopLeftRadius={20}
            borderTopRightRadius={0}
            borderBottomLeftRadius={0}
            borderBottomRightRadius={20}
            textStyle={styles.buttonTextMatematika}
            onPress={() => navigation.navigate('Start')}
          />
          <Text style={styles.textAboveBox}>5 Soal </Text>
        </View>
        <View style={[styles.boxContainer, { backgroundColor: '#6A0572' }]}>
          <CustomButton
            buttonText="Biologi"
            imageSource={require('../../assets/sainss.jpg')}
            borderTopLeftRadius={20}
            borderTopRightRadius={0}
            borderBottomLeftRadius={0}
            borderBottomRightRadius={20}
            textStyle={styles.buttonTextBiologi}
          />
          <Text style={styles.textAboveBox}>7 Soal </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.boxContainer, { backgroundColor: '#073B4C' }]}>
          <CustomButton
            buttonText="Sejarah"
            imageSource={require('../../assets/sejarah.jpg')}
            borderTopLeftRadius={20}
            borderTopRightRadius={0}
            borderBottomLeftRadius={0}
            borderBottomRightRadius={20}
            textStyle={styles.buttonTextKimia}
          />
          <Text style={styles.textAboveBox}>6 Soal </Text>
        </View>
        <View style={[styles.boxContainer, { backgroundColor: '#118AB2' }]}>
          <CustomButton
            buttonText="Seni"
            imageSource={require('../../assets/seni.jpg')}
            borderTopLeftRadius={20}
            borderTopRightRadius={0}
            borderBottomLeftRadius={0}
            borderBottomRightRadius={20}
            textStyle={styles.buttonTextFisika}
          />
          <Text style={styles.textAboveBox}>8 Soal </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.boxContainer, { backgroundColor: '#C17974' }]}>
          <CustomButton
            buttonText="Inggris"
            imageSource={require('../../assets/inggris.jpg')}
            borderTopLeftRadius={20}
            borderTopRightRadius={0}
            borderBottomLeftRadius={0}
            borderBottomRightRadius={20}
            textStyle={styles.buttonTextBahasaInggris}
          />
          <Text style={styles.textAboveBox}>5 Soal </Text>
        </View>
        <View style={[styles.boxContainer, { backgroundColor: '#86A78C' }]}>
          <CustomButton
            buttonText="Indonesia"
            imageSource={require('../../assets/BINDO.jpg')}
            borderTopLeftRadius={20}
            borderTopRightRadius={0}
            borderBottomLeftRadius={0}
            borderBottomRightRadius={20}
            textStyle={styles.buttonTextBahasaIndonesia}
          />
          <Text style={styles.textAboveBox}>7 Soal </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 70,
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  boxContainer: {
    padding: 20,
    borderRadius: 20,
    width: '45%',
    height: 230,  
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 15,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: 180,  
    width: 125,
    marginLeft: -1,
    marginTop: -10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -30, 
    marginLeft: -10,
  },
  buttonTextMatematika: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -5, 
    marginLeft: -10,
  },
  buttonTextBiologi: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -5, 
    marginLeft: -48,
  },
  buttonTextKimia: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -5, 
    marginLeft: -58,
  },
  buttonTextFisika: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -5, 
    marginLeft: -59,
  },
  buttonTextBahasaInggris: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: -5,
    marginLeft: 5,
  },
  buttonTextBahasaIndonesia: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: -5, 
    marginLeft: 5,
  },
  textAboveBox: {
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: -75,
    fontSize: 13,
  },
  buttonImage: {
    width: '119%',  
    height: '90%', 
    marginBottom: 10,
    borderTopLeftRadius:20,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:20,
    marginLeft:-10,
    marginTop:-10
  },
});

export default App;