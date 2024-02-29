import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const QuizStartScreen = ({ navigation }) => {
  const handleStartQuiz = (category) => {
    // Cek kategori dan navigasi sesuai dengan kategori yang dipilih
    if (buttonText === 'Matematika') {
      navigation.navigate('Matematika'); // Ganti dengan nama halaman MatematikaQuiz
    } else if (category === 'Bahasa') {
      navigation.navigate('BahasaQuiz'); // Ganti dengan nama halaman BahasaQuiz
    } else if (category === 'Sains') {
      navigation.navigate('SainsQuiz'); // Ganti dengan nama halaman SainsQuiz
    }
    // Tambahkan kondisi lain sesuai dengan kategori yang Anda miliki
  };

  return (
    <ImageBackground
      source={require('../../assets/gradasi2.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Image
          source={require('../../assets/login.png')}
          style={styles.quizImage}
        />
        
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Matematika')}>
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.)', // Adjust the overlay color and transparency as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#7C73E6',
    padding: 15,
    borderRadius: 20,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ecf0f1',
  },
});

export default QuizStartScreen;
