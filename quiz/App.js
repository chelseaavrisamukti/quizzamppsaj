import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Page/Login';
import QuizScreen from './components/Page/Quiz';
import DashboardScreen from './components/Page/Dashboard';
import RegisterScreen from './components/Page/Register';
import KategoriScreen from './components/Page/Kategori';
import Matematika from './components/Page/Matematika';
import StartScreen from './components/Page/Start'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Matematika" component={Matematika} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Kategori" component={KategoriScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;