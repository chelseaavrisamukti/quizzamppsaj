import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import axios from 'axios';

const App = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizEnded, setQuizEnded] = useState(false);
  const [answerColor, setAnswerColor] = useState(Array(4).fill('#7077A1'));
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://b7b4-36-73-32-230.ngrok-free.app/api/quizzes/category/1', {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => {
        const quizData = response.data.data.map((item) => ({
          ...item,
          isCorrect: false,
        }));
        setQuiz(quizData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const checkAnswer = (answer, index) => {
    let correctAnswer = '';

    switch (currentQuestion) {
      case 0:
        correctAnswer = 'b';
        break;
      case 1:
        correctAnswer = 'c';
        break;
      case 2:
        correctAnswer = 'c';
        break;
      case 3:
        correctAnswer = 'a';
        break;
      case 4:
        correctAnswer = 'c';
        break;
      default:
        correctAnswer = quiz[currentQuestion].correct_answer;
    }

    const isCorrect = answer === correctAnswer;

    setSelectedAnswer(answer);

    const newAnswerColor = [...answerColor];
    newAnswerColor[index] = isCorrect ? 'green' : 'red';
    setAnswerColor(newAnswerColor);

    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    setTimeout(() => {
      const resetAnswerColor = [...answerColor];
      resetAnswerColor[index] = '#7077A1';
      setAnswerColor(resetAnswerColor);

      if (currentQuestion + 1 < quiz.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setQuizEnded(true);
      }
    }, 2000);
  };

  if (loading || !quiz.length) {
    return (
      <View
        style={{
          backgroundColor: '',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="" />
      </View>
    );
  }

  const item = quiz[currentQuestion];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageBackground: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    optionButton: {
      borderRadius: 35,
      padding: 10,
      marginVertical: 10,
      height: 48,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignSelf: 'center',
      width: 250,
      borderWidth: 2,
    },
    optionText: {
      fontSize: 14,
      textAlign: 'left',
      fontWeight: 'bold',
      marginTop: 1,
      color: 'black',
      marginLeft: 10,
    },
    quizText: {
      fontSize: 20,
      padding: 20,
      paddingHorizontal: 1,
      borderRadius: 10,
      textAlign: 'center',
      color: 'black',
    },
    resultSummary: {
      fontSize: 17,
      marginTop: 10,
      color: '#00',
      fontWeight: 'bold'
    },
    result: {
      fontSize: 15,
      marginTop: 10,
      
    },
    correctCount: {
      color: 'green',
    },
    incorrectCount: {
      color: 'red',
    },
    countText: {
      fontSize: 16,
      marginTop: 5,
    },
  });

 if (quizEnded) {
  const totalScore = correctCount * 20; // Setiap pertanyaan bernilai 20 poin
  return (
    <ImageBackground
      source={require('../../assets/gradasi2.jpg')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        {/* Ganti bagian ini untuk menampilkan GIF */}
        <Image
  source={require('../../assets/gif2.gif')}
  style={{
    width: 200,
    height: 200,
    marginBottom: -3,
    marginTop: -50,  // Sesuaikan dengan kebutuhan, ubah nilai marginTop sesuai keinginan Anda
  }}
/>

        <Text style={styles.resultSummary}>
          Skore Anda:
        </Text>
        <Text style={[styles.countText, { fontSize: 25, fontWeight: 'bold' }]}>
          {totalScore}
        </Text>
        <Text style={styles.result}>
          Benar:{' '}
          <Text style={[styles.correctCount, styles.countText]}>
            {correctCount}
          </Text>{' '}
          | Salah:{' '}
          <Text style={[styles.incorrectCount, styles.countText]}>
            {incorrectCount}
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

  
return (
  <ImageBackground
    source={require('../../assets/gradasi2.jpg')}
    style={styles.imageBackground}>
    <View style={styles.container}>
      <Text style={[styles.resultSummary, { marginBottom: 10 }]}>
        Pertanyaan {currentQuestion + 1} dari {quiz.length} Soal
      </Text>
      <Text style={[styles.quizText, { fontWeight: 'normal' }]}>
        {item.quiz}
      </Text>
      {['a', 'b', 'c', 'd'].map((choice, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => checkAnswer(choice, index)}
          style={[
            styles.optionButton,
            {
              backgroundColor:
                selectedAnswer &&
                selectedAnswer === choice &&
                answerColor[index]
                  ? answerColor[index]
                  : 'rgba(255, 255, 255, 0)',
              borderColor:
                selectedAnswer &&
                selectedAnswer === choice &&
                answerColor[index]
                  ? answerColor[index]
                  : 'black',
            },
          ]}
          disabled={!!selectedAnswer}>
          <Text style={styles.optionText}>{item[choice]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </ImageBackground>
);
};

export default App;
