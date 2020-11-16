import React from "react";
import {View,Text, StyleSheet} from "react-native";

const Welcome  =()=>{
    return(
        <View style ={styles.container}>
        <Text>Login Screen</Text>
        </View>
    );
}

var styles= StyleSheet.create({
    container:{
        flex:1,
        color:"red",
        justifyContent:"center",
        alignItems:"center"
    }
});

export default Welcome;