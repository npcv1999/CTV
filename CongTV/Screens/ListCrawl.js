/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import DbITviec from '../db/DbITviec';
import MaskedTitle from '../Component/MaskedTitle';
import DbDevWork from "../db/DbDevWork";
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"; 
import {createStackNavigator} from "@react-navigation/stack";
const Tab = createMaterialTopTabNavigator();

export default function ListCrawl (){
  // const [state, setState] = useState(0);
  return(
      <Tab.Navigator>
        <Tab.Screen name="ITViec" component={DbITviec}>
        </Tab.Screen>
        <Tab.Screen name="DevWork" component={DbDevWork} />
        <Tab.Screen name="Home" component={DbITviec} />
      </Tab.Navigator> 
    // <>
    // {/* <StatusBar barStyle={"dark-content"}></StatusBar> */}
    //   <SafeAreaView style={styles.container}>
    //     <MaskedTitle style={styles.title}>
    //     Danh sách việc làm trang
    //     </MaskedTitle>
    //   {/* <View style={styles.tab}>
    //     <TouchableOpacity 
    //     onPress={() => setState(0)}
    //     style={[styles.button, state ===0 &&{borderBottomColor:'blue'}]}>
    //       <Text style={[styles.btnText, state===0 &&{color:'blue'}]}>ITviec</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity 
    //     onPress={()=> setState(1)}
    //     style={[styles.button, state ===1 &&{borderBottomColor:'blue'}]} >
    //       <Text style={[styles.btnText, state===1 && {color:'blue'}]}>Devwork</Text>
    //     </TouchableOpacity>
    //   </View> */}

    //   {/* <View style={styles.wrapper}>
    //     {state===0 && (<DbITviec></DbITviec>)}
    //     {state===1 && (<DbDevWork></DbDevWork>)}
    //   </View>    */}
    //   </SafeAreaView>
    // </>
  );
}


const styles=StyleSheet.create({
  header:{
    alignItems:"center",
    justifyContent:"center",
  },
  title:{
    textAlign:"center",
    fontSize:25,
    padding:5,
    fontWeight:"bold",
    fontStyle:"italic", 
    fontFamily:"monospace"
  },
  container:{
    flex:1,
  },
  tab:{
    flexDirection:"row",
  },
  button:{
    flex:1,
    alignItems:"center",
    padding:15,
    borderBottomWidth:2,
    borderBottomColor:"#b2b2ff",
  },
  btnText:{
    fontSize:17,
    fontWeight:"bold",
    color:"#8c8cff"
  },
  wrapper:{
    //backgroundColor:"red",
    //marginTop:"10%",
    flex:1,
    paddingHorizontal:5,
    paddingVertical:10,
  },
  
})




