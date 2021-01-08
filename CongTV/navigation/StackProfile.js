import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import Profile from '../Screens/Profile';
import Sercurity from '../Screens/Sercurity';

const Stack = createStackNavigator();
export default function StackProfile() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Profile}></Stack.Screen>
      <Stack.Screen
        name="Detail"
        component={Sercurity}
        options={{headerTitle: 'Chi tiết công ty'}}></Stack.Screen>
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});
