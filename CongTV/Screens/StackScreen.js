import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ListCrawl from './Home';
import Building from '../Screens/Building';
import {AuthContext} from '../navigation/AuthProvider';
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
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Chào mừng{'\n'}
        {user.email}
      </Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
}

export {HomeStackScreen, BuilDingScreen, FavoriteScreen, Profile};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
});
