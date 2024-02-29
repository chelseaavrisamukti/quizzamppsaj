import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const QuizScreen = ({ navigation }) => {
  const quizData = [
    {
      question:'What is the opposite of the word "brave"?',
      options: [
        { text: 'a. Strong', width: '85%' },
        { text: 'b. Cowardly', width: '85%' },
        { text: 'c. Wise', width: '85%' },
        { text: 'd. Friendly', width: '85%' },
      ],
      correctAnswer: 'b. Cowardly',
    },
    {
      question:'Choose the correct form of the verb to complete the sentence: She ... to the store every day.',
      options: [
        { text: 'a. go', width: '78%' },
        { text: 'b. goes', width: '78%' },
        { text: 'c. Went', width: '78%' },
        { text: 'd. going', width: '78%' },
      ],
      correctAnswer: 'b. goes',
    },
    {
      question:'What is the capital city of Australia?',
      options: [
        { text: 'a. Sydney', width: '95%' },
        { text: 'b. Melbourne', width: '95%' },
        { text: 'c. Canberra', width: '95%' },
        { text: 'd. Brisbane', width: '95%' },
      ],
      correctAnswer: 'c. Canberra',
    },
    {
      question:'Which of the following is a renewable source of energy?',
      options: [
        { text: 'a. Coal', width: '80%' },
        { text: 'b. Natural gas', width: '80%' },
        { text: 'c. Solar power', width: '80%' },
        { text: 'd. Nuclear power', width: '80%' },
      ],
      correctAnswer: 'c. Solar power',
    },
    {
      question:'What is the synonym for "happy"?',
      options: [
        { text: 'a. Sad', width: '100%' },
        { text: 'b. Joyful', width: '100%' },
        { text: 'c. Angry', width: '100%' },
        { text: 'd. Tired', width: '100%' },
      ],
      correctAnswer: 'b. Joyful',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (selectedOption) => {
    const isCorrect =
      selectedOption === quizData[currentQuestion].correctAnswer && selectedOption !== '';

    if (isCorrect) {
      setScore(score + 20);
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    setSelectedAnswer({ selectedOption, isCorrect });
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Alert.alert('Pilih Jawaban', 'Anda harus memilih jawaban sebelum melanjutkan.');
    }
  };

  const quizFinished = currentQuestion === quizData.length;

  const handleBack = () => {
    navigation.goBack();
  };

  const handleExplanation = () => {
    
    Alert.alert('Penjelasan', 'Ini adalah penjelasan untuk pertanyaan ini.');
  };

  return (
    <ImageBackground
      source={require('../../assets/gradasi2.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        {quizFinished ? (
          <View style={styles.resultContainer}>
            <View style={styles.gifContainer}>
              <Image
                source={require('../../assets/gif2.gif')}
                style={styles.gif}
              />
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.resultText}>Skor Anda:</Text>
              <Text style={styles.score}>{score}</Text>
              <Text style={styles.resultSummary}>
                Benar: <Text style={styles.correctCount}>{correctCount}</Text> | Salah: <Text style={styles.incorrectCount}>{incorrectCount}</Text>
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Text style={styles.backButtonText}>Kembali</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.explanationButton} onPress={handleExplanation}>
                <Text style={styles.explanationButtonText}>Penjelasan</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        ) : (
          <View style={styles.quizContainer}>
            <Text style={styles.questionInfo}>
              Pertanyaan {currentQuestion + 1} dari {quizData.length}
            </Text>
            <Text style={styles.questionText}>{quizData[currentQuestion].question}</Text>
            {quizData[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  { width: option.width },
                  selectedAnswer &&
                    selectedAnswer.selectedOption === option.text && {
                      borderColor: selectedAnswer.isCorrect ? '#65B741' : '#e74c3c',
                      backgroundColor: selectedAnswer.isCorrect ? '#2ecc71' : '#c0392b',
                    },
                ]}
                onPress={() => handleAnswer(option.text)}
                disabled={selectedAnswer !== null}
              >
                <Text style={styles.optionText}>{option.text}</Text>
                {selectedAnswer &&
                  selectedAnswer.selectedOption === option.text &&
                  (selectedAnswer.isCorrect ? (
                    <Icon name="check" type="font-awesome" color="#2ecc71" size={16} />
                  ) : (
                    <Icon name="times" type="font-awesome" color="#e74c3c" size={16} />
                  ))}
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
              <Text style={styles.nextButtonText}>Lanjut</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifContainer: {
    marginBottom: 50,
  },
  gif: {
    width: 190,
    height: 190,
    marginBottom: -3,
  },
  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00',
    marginBottom: 10,
  },
  scoreContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 20,
    paddingHorizontal: 75,
    borderRadius: 25,
    marginBottom: -2,
    marginTop: -20,
  },
  score: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  resultSummary: {
    fontSize: 16,
    marginTop: 10,
    color: '#00',
  },
  correctCount: {
    color: '#2ecc71',
  },
  incorrectCount: {
    color: '#e74c3c',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    width: '45%',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ecf0f1',
    textAlign: 'center',
  },
  explanationButton: {
    backgroundColor: '#7C73E6',
    padding: 10,
    borderRadius: 20,
    width: '53%',
    alignItems: 'center',
  },
  explanationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ecf0f1',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#7C73E6',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    width: '45%',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ecf0f1',
    textAlign: 'center',
  },
  quizContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionInfo: {
    fontSize: 16,
    color: '#00',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 17,
    marginBottom: 20,
    color: '#00',
    textAlign: 'center',
  },
  optionButton: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#00',
  },
});

export default QuizScreen;
