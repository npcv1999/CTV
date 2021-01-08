import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import Loading from '../Component/Loading';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native-elements';
const WIDTH = Dimensions.get('window').width;
export default class HomeBuilding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
    const {navigation} = this.props;
  }
  comments() {
    return (
      <View>
        <TextInput
          style={styles.comments}
          value={this.state.comments.toString()}
          onChangeText={this.setState.comments}></TextInput>
        <TouchableOpacity
          onPress={() => this.save()}
          style={{
            position: 'absolute',
            top: 10,
            right: 20,
          }}>
          <Icon name="send" size={25}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
  //Key
  // Fetch data
  componentDidMount() {
    const url = 'https://congtimviec.firebaseio.com/top.json';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json, loading: false});
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  }
  //Key
  keyExtractor = (item, index) => item.title;
  //Separator
  ItemSeparatorComponent = () => <View style={styles.separator}></View>;

  // renderItem({item, index}) {
  //   return (
  //     <>
  //       <View style={styles.item}>
  //         <Image
  //           resizeMode={'contain'}
  //           source={{uri: item.logo}}
  //           style={styles.img}
  //           PlaceholderContent={<ActivityIndicator />}></Image>
  //         <Text style={styles.title}>{item.title}</Text>
  //         <TouchableOpacity
  //           onPress={() => this.props.navigation.navigate('Detail')}>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //             }}>
  //             <Text style={styles.info}>Chi tiết công ty</Text>
  //             <AntDesign
  //               style={styles.info}
  //               name="doubleright"
  //               size={14}></AntDesign>
  //           </View>
  //         </TouchableOpacity>
  //         {/* <Text numberOfLines={5} style={styles.text}>
  //               {description}
  //             </Text> */}
  //       </View>
  //       {/* <TouchableOpacity style={styles.heart}>
  //             <Icon name="star" size={20} color="#ff0066"></Icon>
  //           </TouchableOpacity> */}
  //       {/* <View>
  //         <TextInput
  //           style={styles.comments}
  //           onChangeText={this.comments}></TextInput>
  //         <TouchableOpacity
  //           onPress={() => this.save(item, index)}
  //           style={{
  //             position: 'absolute',
  //             top: 10,
  //             right: 20,
  //           }}>
  //           <Icon name="send" size={25}></Icon>
  //         </TouchableOpacity>
  //       </View> */}
  //     </>
  //   );
  // }
  render() {
    if (this.state.loading) {
      return <Loading></Loading>;
    }
    return (
      <FlatList
        numColumns={2}
        data={this.state.data}
        renderItem={({item, index}) => (
          <View style={styles.item}>
            <Image
              resizeMode={'contain'}
              source={{uri: item.logo}}
              style={styles.img}
              PlaceholderContent={<ActivityIndicator />}></Image>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Detail', {index, item})
              }>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.info}>Chi tiết công ty</Text>
                <AntDesign
                  style={styles.info}
                  name="doubleright"
                  size={14}></AntDesign>
              </View>
            </TouchableOpacity>
            {/* <Text numberOfLines={5} style={styles.text}>
                {description}
              </Text> */}
          </View>
        )}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.ItemSeparatorComponent}></FlatList>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 8,
    height: WIDTH / 1.2,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
  },
  img: {
    width: 100,
    height: 150,
  },
  title: {
    flex: 0.5,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'auto',
  },
  info: {
    margin: 3,
    color: 'green',
    justifyContent: 'center',
  },
});
