import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/AntDesign';
import Dialog from 'react-native-dialog';
const DialogLogOut = () => {
  const [visible, setVisible] = useState(false);
  const {logout} = useContext(AuthContext);
  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    logout();
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnlogout} onPress={showDialog}>
        <Icon name="logout" size={25} color="white"></Icon>
        <Text style={styles.txtLogout}>Đăng xuất</Text>
      </TouchableOpacity>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Đăng xuất</Dialog.Title>
        <Dialog.Description>
          Bạn có chắc muốn đăng xuất không?
        </Dialog.Description>
        <Dialog.Button label="Đăng xuất" onPress={handleDelete} />
        <Dialog.Button label="Hủy" onPress={handleCancel} />
      </Dialog.Container>
    </View>
  );
};
export default DialogLogOut;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
