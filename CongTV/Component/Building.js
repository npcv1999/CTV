import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
export default class Building extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      comments: '',
    };
  }
  save() {
    console.log(this.state.comments);
  }
  renderItem = (obj) => {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.img}>
            <Image
              source={{uri: obj.item.logo}}
              style={{width: 60, height: 60}}></Image>
          </View>
          <View style={styles.detail}>
            <View style={styles.info}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(obj.item.href);
                }}>
                <Text style={styles.title}>{obj.item.title}</Text>
                <Text style={styles.tag}>Description:</Text>
                <Text style={styles.text}>{obj.item.decription}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.heart}>
              <Icon name="star" size={20} color="#ff0066"></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TextInput
            style={styles.comments}
            value={this.state.comments}
            onChangeText={(comments) => this.setState({comments})}></TextInput>
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
      </>
    );
  };
  //Key
  keyExtractor = (item) => item.title;
  //Separator
  ItemSeparatorComponent = () => <View style={styles.separator}></View>;
  //EmptyItem
  ListEmptyComponent = () => (
    <View style={styles.viewEmpty}>
      <Text style={styles.textEmpty}>
        Không tìm thấy dữ liệu!{'\n'}
        Vui lòng nhập lại...
      </Text>
    </View>
  );
  //Fetch data
  componentDidMount() {
    const url = 'https://congtimviec.firebaseio.com/top.json';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
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
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.ItemSeparatorComponent}></FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //Shadow item
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.67,

    elevation: 2,
    //
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    height: 'auto',

    flexDirection: 'row',
    borderRadius: 3.67,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 1 / 6,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    textAlign: 'auto',
    fontSize: 16,
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 12,
    textAlign: 'auto',
  },
  tag: {
    fontWeight: 'bold',
  },
  money: {
    color: 'blue',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  separator: {
    height: 10,
    width: '100%',
  },
  detail: {
    flex: 1,
  },
  comments: {
    borderRadius: 10,
    borderWidth: 0.5,
    // backgroundColor: 'red',
    marginLeft: 5,
    marginRight: 5,
    position: 'relative',
    paddingLeft: 20,
  },
});
