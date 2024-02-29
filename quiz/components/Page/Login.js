import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (username === '1' && password === '2') {
      navigation.navigate('Dashboard');
    } else {
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text> 
      <Image source={require('../../assets/fixlogo.png')} style={styles.logo} />
      
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'#white'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: 'black',
    color:'black',
    borderWidth: 1.5,
    marginBottom: 9,
    marginTop: 15,
    paddingLeft: 10,
    borderRadius: 13
  },
  loginButton: {
    backgroundColor: '#7C73E6',
    padding: 10,
    marginTop:10,
    borderRadius: 8,
    width:'100%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  logo: {
    width: 260,
    height: 150,
    marginBottom: 30,
    marginHorizontal: 80,
    borderRadius: 50,
  },
  
});

export default LoginScreen;
