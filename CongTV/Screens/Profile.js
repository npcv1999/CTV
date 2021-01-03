import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/AntDesign';
import {Avatar, Divider} from 'react-native-elements';
const Profile = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Divider style={{backgroundColor: 'blue'}} />
      <View style={styles.info}>
        <Avatar
          size="medium"
          rounded
          source={{
            uri: user.photoURL,
          }}
        />
        <Text style={styles.text}>Chào mừng</Text>
        <Text style={styles.txtuser}>{user.displayName} !</Text>
      </View>
      <View style={styles.space}></View>
      <View
        style={{backgroundColor: 'white', padding: 15, flexDirection: 'row'}}>
        <Icon name="mail" size={25}></Icon>
        <Text style={styles.txtuser}>Email: {user.email}</Text>
      </View>

      <View style={styles.viewLogOut}>
        <TouchableOpacity style={styles.btnlogout} onPress={() => logout()}>
          <Icon name="logout" size={25} color="white"></Icon>
          <Text style={styles.txtLogout}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    flex: 1,
  },
  info: {
    padding: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
    color: '#338533',
  },
  txtuser: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
  viewLogOut: {
    height: 60,
    marginTop: 2,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  space: {
    height: 2,
  },
  btnlogout: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: '#f2610d',
    color: 'white',
    height: 'auto',
    width: 'auto',
  },
  txtLogout: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
});
