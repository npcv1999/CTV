import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import firebase from '@react-native-firebase/app'

export default class Loading extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Main' : 'SignUp')
      })
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" ></ActivityIndicator>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})
