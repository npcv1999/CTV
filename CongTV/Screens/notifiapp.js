import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
const notifiapp = () => {
  async function onDisplayNotification() {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    // Display a notification
    await notifee.displayNotification({
      title: 'Chào ',
      body: 'Bạn có việc làm mới',
      android: {
        channelId,
        setSmallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      },
    });
  }
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  return (
    <View>
      <Text>Hihi</Text>
      <View>
        <Button
          title="Display Notification"
          onPress={() => requestUserPermission()}
        />
      </View>
    </View>
  );
};
export default notifiapp;

const styles = StyleSheet.create({});
