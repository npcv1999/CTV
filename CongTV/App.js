import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import 'react-native-gesture-handler';
import FrLoginAndRegist from './Screens/FrLoginAndRegist';
import {createStackNavigator} from "@react-navigation/stack";
import Login from './Screens/Login';
import Register from './Screens/Register';

const Stack=createStackNavigator();
const App =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component ={FrLoginAndRegist} ></Stack.Screen>
        <Stack.Screen name="Login" component ={Login}></Stack.Screen>
        <Stack.Screen name="Regist" component ={Register}></Stack.Screen>
      </Stack.Navigator>
      {/* <FrLoginAndRegist></FrLoginAndRegist> */}
    </NavigationContainer>    
  );
}
export default App

