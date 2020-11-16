import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Main(state={currentUser:null}) {
    const {currentUser} = this.state
    return (
        <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }    
})
