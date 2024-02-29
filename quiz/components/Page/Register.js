import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    
    if (password === 'f' && confirmPassword ==='f') {
      navigation.navigate('Login');
    } else {
      
      alert('Password dan konfirmasi password tidak cocok.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register</Text>
      <Image source={require('../../assets/fixlogo.png')} style={styles.logo} />
     
      <Text style={styles.text}>Please enter data  :</Text>
      
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
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>Already have an account? Login here</Text>
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
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: '#7C73E6',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 260,
    height: 150,
    marginBottom: 30,
    marginHorizontal: 80,
    borderRadius: 50,
  },
  text: {
    fontSize:18,
    fontWeight: 'bold',
    color:'black'

  },
});

export default RegisterScreen;
