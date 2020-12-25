/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListCrawl from '../Screens/ListCrawl';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import Building from './Building';

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3399ff',
        },
      }}>
      <Stack.Screen
        name="Danh sách việc từ trang"
        component={ListCrawl}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}
function BuilDingScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#39ac39',
        },
      }}>
      <Stack.Screen
        name="Top công ty"
        component={Building}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}
function FavoriteScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff66b3',
        },
      }}>
      <Stack.Screen
        name="Danh sách việc yêu thích"
        component={Profile}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}
function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
export default function BottomTab({size = 20}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="white"
        inactiveColor="#303030"
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarColor: '#3399ff',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={BuilDingScreen}
          options={{
            tabBarLabel: 'Top công ty',
            tabBarColor: '#39ac39',
            tabBarIcon: ({color}) => (
              <Icon name="building" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Yêu thích"
          component={FavoriteScreen}
          options={{
            tabBarLabel: 'Yêu thích',
            tabBarColor: '#ff66b3',
            tabBarIcon: ({color}) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Tài khoản',
            tabBarColor: '#ff944d',
            tabBarIcon: ({color}) => (
              <Icon name="user-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
