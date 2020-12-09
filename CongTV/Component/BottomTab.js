/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListCrawl from '../Screens/ListCrawl';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Danh sách việc từ trang" 
                    component={ListCrawl} 
                    options={{headerTitleAlign:"center"}}/>
    </Stack.Navigator>
  );
}
function BuilDingScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Top công ty" component={Profile} />
    </Stack.Navigator>
  );
}
function FavoriteScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Danh sách việc yêu thích" component={Profile} />
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
        tabBarOptions={{
          // activeTintColor: '#003399',
          style:{height:65},
          labelStyle:{marginBottom:10},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel:'Trang chủ',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={BuilDingScreen}
          options={{
            tabBarLabel: 'Top công ty',
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
            tabBarIcon: ({color}) => (
              <Icon name="user-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
