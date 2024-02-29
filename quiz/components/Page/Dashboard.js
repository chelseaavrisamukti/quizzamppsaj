import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.helloText}>Hallo,</Text>
        <Text style={styles.muktiText}>Mukti A.</Text>
       
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="#7C73E6" style={styles.searchIcon} />
          <TextInput
            placeholder="Cari..."
            style={styles.searchInput}
          />
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={styles.profileImage}
        />
      </View>
      
      <View style={{ marginBottom: 20 }} />

  
      <View style={styles.taskContainer}>
        <Text style={styles.boldText}>Apa yang ingin kamu kerjakan hari ini?</Text>
        <View style={styles.taskContent}>
          <Image
            source={require('../../assets/dashboard.png')}  
            style={styles.taskImage}
          />
          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Kategori')}>
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.historyContainer}>
        <Text style={styles.historyText}>Histori</Text>
      </View>

      
      <View style={styles.unfinishedContainer}>
        <TouchableOpacity style={[styles.unfinishedButton, { backgroundColor: '#F8F0E5' }]}>
          <Image
            source={require('../../assets/mtk.jpg')}  
            style={styles.categoryImage}
          />
          <Text style={styles.unfinishedButtonText}>Matematika</Text>
          <View style={styles.progressCircleContainer}>
            <Svg height="50" width="50">
              <Circle
                cx="20"
                cy="20"
                r="18"
                fill="transparent"
                stroke="#7C73E6"
                strokeWidth="4"
              />
              <Circle
                cx="20"
                cy="20"
                r="17"
                fill="transparent"
                stroke="#FFE9E3"
                strokeWidth="6"
                strokeDasharray="75 100"
                strokeDashoffset="90"
              />
            </Svg>
            <Text style={styles.progressText}>75%</Text>
          </View>
        </TouchableOpacity>

        
      </View>
      <View style={styles.unfinishedContainer}>
        <TouchableOpacity style={[styles.unfinishedButton, { backgroundColor: '#C4C1E0' }]}>
          <Image
            source={require('../../assets/inggris.jpg')}  
            style={styles.categoryImage}
          />
          <Text style={styles.unfinishedButtonText}>Bahasa Inggris</Text>
          <View style={styles.progressCircleContainer}>
            <Svg height="50" width="50">
              <Circle
                cx="20"
                cy="20"
                r="18"
                fill="transparent"
                stroke="#7C73E6"
                strokeWidth="4"
              />
              <Circle
                cx="20"
                cy="20"
                r="17"
                fill="transparent"
                stroke="#FFE9E3"
                strokeWidth="6"
                strokeDasharray="60 100"
                strokeDashoffset="90"
              />
            </Svg>
            <Text style={styles.progressText}>65%</Text>
          </View>
        </TouchableOpacity>

        
      </View>
      <View style={styles.unfinishedContainer}>
        <TouchableOpacity style={[styles.unfinishedButton, { backgroundColor: '#DCF2F1' }]}>
          <Image
            source={require('../../assets/sains.jpg')}  
            style={styles.categoryImage}
          />
          <Text style={styles.unfinishedButtonText}>Sains</Text>
          <View style={styles.progressCircleContainer}>
            <Svg height="50" width="50">
              <Circle
                cx="20"
                cy="20"
                r="18"
                fill="transparent"
                stroke="#7C73E6"
                strokeWidth="4"
              />
              <Circle
                cx="20"
                cy="20"
                r="17"
                fill="transparent"
                stroke="#FFE9E3"
                strokeWidth="7"
                strokeDasharray="50 100"
                strokeDashoffset="90"
              />
            </Svg>
            <Text style={styles.progressText}>50%</Text>
          </View>
        </TouchableOpacity>

       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor:'white'
  },
  headerContainer: {
    flexDirection: 'column',  
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,  
  },
  helloText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#B4B4B8',
    marginRight: 10,
  },
  muktiText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 20,
    marginTop: 20,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: 'white',  
    backgroundColor: '#F0F0F0',  
    marginTop: 25,
  },
  searchIcon: {
    marginRight: 10,
    color: '#7C73E6',  
  },
  searchInput: {
    width: 230,
    height: 25,
    borderWidth: 0, 
  },
  
  taskContainer: {
    backgroundColor: '#FFE9E3',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  
  },
  taskImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: -190,
    marginTop: -235,
    marginLeft: 15,
  },
  startButton: {
    backgroundColor: '#7C73E6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: -600, 
    marginRight: 50,
    
  },
  startButtonText: {
    color: 'white',
  },
  // Teks "Histori"
  historyContainer: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  historyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  
  unfinishedContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    marginTop: 20,  
    flexWrap: 'wrap', 
  },
  unfinishedButton: {
  padding: 2,
  borderRadius: 13.5,
  alignItems: 'center',
  width: 280,
  height: 60,
  marginBottom: -13,  
  marginRight: 10,
  marginTop: 10,  
  flexDirection: 'row',
},
  categoryImage: {
    
    width: 40,
    height: 40,
    borderRadius: 12,
    marginRight: 15,  
    marginBottom: 5,
    marginLeft:10,
    marginTop:5

  },
  unfinishedButtonText: {
    fontWeight: 'bold',
  },
  
  progressCircleContainer: {
   position: 'absolute',
    top: 10,
    right: 25,
    marginRight:-9
  },
  
  progressText: {
    fontSize:12,
    marginLeft: 8,
    fontWeight: 'bold',
    marginTop:-39
  },
});
