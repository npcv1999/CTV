import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import Providers from './navigation';

const App = () => {
  return (
    <Providers></Providers>
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
