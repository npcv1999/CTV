import React from 'react'
import { TextInput,Text, StyleSheet, View, FlatList, Image, TouchableOpacity, Linking,ActivityIndicator } from 'react-native'
import Loading from '../Component/Loading';
import Icon from "react-native-vector-icons/AntDesign";


export default class DbDevWork extends React.Component {
   constructor(props){
       super(props)
       this.state={
           data:[],
           text:"",
           loading:true
       }
       this.arrayHolder=[];
   }
   renderItem=(obj)=>{
        return (
          <>
            <View style={styles.container}>
                <View style={styles.img}>
                    <Image source={{uri : obj.item.logo}} 
                    style={{width: 60, height: 60}}></Image>
                </View>
                <View style={styles.detail}>
                    <View style={styles.info}> 
                        <TouchableOpacity 
                        onPress={()=>{
                        Linking.openURL(obj.item.href)}}>
                            <Text style ={styles.title}>{obj.item.title}</Text>
                            <Text style ={styles.tag}>Công ty:</Text>
                            <Text style ={styles.text}>{obj.item.company}</Text>
                            <Text style ={styles.tag}>Mức lương</Text>
                            <Text style ={styles.money}>{obj.item.luong}</Text>
                        </TouchableOpacity>  
                    </View>
                    <TouchableOpacity style={styles.heart}>
                        <Icon name ="hearto" size={25} color="#ff0066"></Icon>
                    </TouchableOpacity>
                </View>     
            </View>
            </>
           
        )
        
        
};
//Key
   keyExtractor=(item)=> item.title;
//Separator
   ItemSeparatorComponent = ()=>
   <View style={styles.separator}></View>;
//EmptyItem
    ListEmptyComponent=()=>
    <View style={styles.viewEmpty}>
        <Text style={styles.textEmpty}>
            Không tìm thấy dữ liệu!{"\n"}
            Vui lòng nhập lại...
        </Text>
    </View>;
//Fetch data 
   componentDidMount(){
       const url= "https://congtimviec.firebaseio.com/devwork.json"
       fetch(url)
       .then((response)=> response.json())
       .then((json)=> {
           console.log(json)
        setInterval(()=>{
            this.setState({data:json,
                loading:false},()=>{
                    this.arrayHolder=json;
                })
           },1000)
       })
       .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });    
    }
    //Search item
    searchData(text) {
        const newData = this.arrayHolder.filter(item => {
          const itemData = item.title.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;    
        });
            this.setState({
                data:newData,
                text: text
                })      
      }

    render() {
        // console.log(this.state.data);
        if(this.state.loading===true) 
        {
            return(
                <Loading></Loading>
            )    
        }
        return (
            <View style={styles.MainContainer}>
            <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.searchData(text)}
            value={this.state.text}
            underlineColorAndroid='transparent'
            placeholder="Tìm kiếm ..." />   
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    //Search
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 5,
      },
      textInput: {
        textAlign: 'center',
        height: 42,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 8,
        backgroundColor: "#FFFF"
     
      },

    container:{
        //Shadow item
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 3.67,

        elevation:2,
        //
        padding:5,
        height:"auto",
        marginLeft:5,
        marginRight:5,
        flexDirection:"row",
        borderRadius:3.67,
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    img:{
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        flex:1/6
    },
    info:{
        flex:1,
        marginLeft:10
    },
    title:{
        textAlign:"auto",
        fontSize:16,
        color:"red",
        marginTop:10,
        marginBottom:10,
        borderBottomWidth:0.5
    },
    text:{
        fontSize:12,
        textAlign:"auto"
    },
    tag:{
        fontWeight:"bold"
    },
    money:{
        color:"blue"
    },
    loading:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    heart:{
        alignSelf:"flex-end",
        justifyContent:"flex-end"
    },
    separator:{
        height:10,
        width:"100%"
    },
    detail:{
        flex:1,
    }
})
