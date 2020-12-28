import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import 'react-native-gesture-handler';
import FrLoginAndRegist from './Screens/FrLoginAndRegist';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Main from './Screens/Main';
import {firebase} from './db/firebase';
import ListCrawl from './Screens/ListCrawl';
import BottomTab from './Component/BottomTab';
import Welcome from './Screens/Welcome';
import GoogleSign from './Component/GoogleSign';
const Stack = createStackNavigator();
const App = () => {
  return (
    <Welcome></Welcome>
    // <BottomTab></BottomTab>
    // <ListCrawl></ListCrawl>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Chào mừng bạn" component ={FrLoginAndRegist} ></Stack.Screen>
    //     <Stack.Screen name="Login" component ={Login}></Stack.Screen>
    //     <Stack.Screen name="Regist" component ={Register}></Stack.Screen>
    //     <Stack.Screen name="Main" component={Main}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default App;
