import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import HomeBuilding from '../Component/HomeBuilding';
import DetailBuilding from '../Component/DetailBuilding';

const Stack = createStackNavigator();
export default function Building() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Home"
        component={HomeBuilding}
        options={{headerTitle: 'Top công ty'}}></Stack.Screen>
      <Stack.Screen
        name="Detail"
        component={DetailBuilding}
        options={{headerTitle: 'Chi tiết công ty'}}></Stack.Screen>
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});
