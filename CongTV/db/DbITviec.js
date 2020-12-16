import React from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, Linking ,ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Loading from '../Component/Loading';


export default class DbITviec extends React.Component {
   constructor(props){
       super(props)
       this.state={
           data:[],
           loading:true
       }
   }
   renderItem=(obj)=>{
        return (
            <View>
            {/* <TouchableOpacity onPress={()=>{Linking.openURL(obj.item.href)}}> */}
            <View style={styles.container}>
                <View style={styles.img}>
                    <Image source={{uri : obj.item.logo}} 
                    style={{width: 50, height: 50}}></Image>
                </View>
                <TouchableOpacity style={styles.info} onPress={()=>{Linking.openURL(obj.item.href)}}>
                <View >
                    <Text style ={styles.title}>{obj.item.title}</Text>
                    <Text style= {styles.tag}>Description:</Text>
                    <Text style ={styles.text}>{obj.item.decription}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.heart}>
                    <Icon name ="hearto" size={25} color="#ff0066"></Icon>
                </View>
                </TouchableOpacity>
            </View>
            {/* </TouchableOpacity> */}
            </View>

        )
        
        
};
   keyExtractor=(item)=> item.id;

   componentDidMount(){
       const url="https://congtimviec.firebaseio.com/itviec.json"
       fetch(url)
       .then((response)=> response.json())
       .then((json)=> {
           console.log(json);
           setInterval(()=>{
            this.setState({data:json,
                loading:false})
           },1000)     
       })
       .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });    
    }
    render() {
        console.log(this.state.data);
        if(this.state.loading===true) 
        {
            return(
                <Loading></Loading>
            )  
        }
        return(    
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        borderColor:"gray",
        borderWidth:0.5,
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    img:{
        justifyContent:"center",
        alignItems:"center",
        padding:20,
        flex:1/6
    },
    info:{
        margin:5,
        flex:3/4
    },
    title:{
        fontSize:20,
        color:"red"
    },
    text:{
        fontSize:12,
        textAlign:"left",
    },
    tag:{
        fontWeight:"bold"
    },
    heart:{
        margin:1
    }
})
