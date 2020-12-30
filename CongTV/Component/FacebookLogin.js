import React, {Component} from 'react';
import {
  View,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken, LoginButton} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/AntDesign';
async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (result.isCancelled) {
    alert('Hủy đăng nhập');
  } else {
    alert('ĐĂNG NHẬP THÀNH CÔNG' + result.grantedPermissions.toString());
    // alert(
    //   'Đăng nhập thành công',
    //   // 'Login success with permissions: ' + result.grantedPermissions.toString(),
    // );
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}
export default class FBLoginButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.FBlogin}
          onPress={() => onFacebookButtonPress()}>
          <Icon
            style={styles.icon}
            name="facebook-square"
            size={30}
            color="white"></Icon>
          <Text style={styles.text}>Đăng nhập với facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = FBLoginButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 90,
    alignSelf: 'center',
  },
  FBlogin: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#054696',
    padding: 9,
    borderRadius: 5,
    borderColor: 'gray',
  },
  icon: {
    flex: 1 / 3,
  },
  text: {
    flex: 2 / 3,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
