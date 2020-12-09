import React from 'react'
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native'

export default function Loading() {
    return (
        <View style={styles.loading}>
              <ActivityIndicator
                animating={true}
                size="large"
                color="#0000ff"
              />
              <Text>Vui lòng đợi...</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    loading:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
