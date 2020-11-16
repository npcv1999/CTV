// import React from 'react'
// import { View, Text, StyleSheet } from 'react-native'
// import Button from '../Component/Button'
// import InputValues from '../Component/InputValues'
// import Pwd from '../Component/Pwd'

// export default function Register() {
//   return (
//     <View style={styles.register}>
//       <InputValues title='Tài khoản' icon='user'></InputValues>
//       <InputValues title='Email' icon='mail'></InputValues>
//       <Pwd title='Mật khẩu' icon='lock' isPwd ></Pwd>
//       <Button btn='Đăng ký tài khoản'></Button>
//     </View>
//   )
// }
//  const styles=StyleSheet.create({
//    register:{
//      margin:10,
//    }
//  })

import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../Component/Button';
import {firebase} from "@react-native-firebase/app";
import {auth} from "@react-native-firebase/auth";
//import {firebase} from "firebase";
import {ReactNativeFirebase} from '@react-native-firebase/app';
import { useNavigation } from '@react-navigation/native';
export default class Register  extends React.Component
{
    
    state={
        email:"",
        password:"",
        errorMessage:null,
        icon:"eye-off",
        pwd: true,
    };
    
    handleSignUp = () => {
        const { email, password } = this.state
          auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => this.props.navigation.navigate('Main'))
          .catch(error => this.setState({ errorMessage: error.message }))
      }
    changeIcon(){
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            pwd:!prevState.pwd
        }));
    }
    render(){
    return (
        <>
        <View>
            <Text style={styles.title}>Tài khoản</Text>
            <View style ={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name="user" style={styles.icon} size={25} color="#D3D4D5"></Icon>
                <TextInput 
                style={styles.input} 
                placeholder="Nhập tài khoản" 
                >
                </TextInput>
            </View>
            </View>

            <Text style={styles.title}>Email</Text>
            <View style ={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name="mail" style={styles.icon} size={25} color="#D3D4D5"></Icon>
                <TextInput 
                style={styles.input} 
                placeholder="Nhập email" 
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                >
                </TextInput>
            </View>
            </View>

        </View>
        <View>
            <Text style={styles.title}>Mật khẩu</Text>
            <View style ={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name="lock" style={styles.icon} size={25} color="#D3D4D5"></Icon>
                <TextInput 
                style={styles.input} 
                placeholder="Nhập mật khẩu" 
                secureTextEntry={this.state.pwd}
                onChangeText={password => this.setState({ password })}
                value={this.state.password} 
                >
                </TextInput>
                    <Icon 
                    name={this.state.icon} 
                    style={styles.eye} 
                    size={25} 
                    color="#EC80B5"
                    onPress={()=>this.changeIcon()}>
                    </Icon>  
            </View>
            </View>
        </View>
        <Button btn='Đăng ký tài khoản' onPress={this.handleSignUp} ></Button>
        </>      
       
    );
    }
}


const styles = StyleSheet.create({
    container:{  
        justifyContent:"center",
        alignItems:"center"   
    },
    inputContainer:{
        backgroundColor:"#F8F9FA",
        flexDirection:"row",
        padding:1,
        borderWidth:1,
        //width:'80%',
        borderColor:"#D3D4D5",
        borderRadius:50, 
        
    },
    title:{
        color:"black",
        fontWeight:"bold",
        marginVertical:6,
        fontSize:15,
        marginLeft:"10%"
    },
    icon:{
        marginLeft:"3%",
        marginTop:"3%",
        color:"#ff8c1a"
    },
    eye:{
        marginRight:"3%",
        marginTop:"3%",
        color:"#ff8c1a"
    },
    input:{
        color:"black",
        flex:1,
    },


});

