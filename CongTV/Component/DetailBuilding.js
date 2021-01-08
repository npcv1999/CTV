import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  LogBox,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {Avatar, Image} from 'react-native-elements';
const WIDTH = Dimensions.get('screen').width;

import firebase from '../db/firebase';

export default class DetailBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      disabled: true,
      value: '',
      comments: '',
    };
  }

  comments = (text) => {
    if (text.length >= 0) {
      this.setState({comments: text, disabled: !this.state.disabled});
    } else {
      this.setState({disabled: !this.state.disabled});
    }
  };
  save(index) {
    console.log(index);
    const id = index;
    fetch('https://congtimviec.firebaseio.com/top/' + id + '/comments.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comments: this.state.comments,
      }),
    }).then((response) => {
      if (response.status == 200) {
        alert('Gửi đánh giá thành công');
        this.setState({comments: ''});
      }
    });
  }
  async componentDidMount() {
    LogBox.ignoreLogs(['Setting a timer']);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    var user = firebase.auth().currentUser;
    const route = this.props.route.params;
    const item = route.item;
    const index = route.index;
    const id = index;
    try {
      var starCountRef = firebase.database().ref('top/' + id + '/comments');
      starCountRef.on('value', (childSnapshot) => {
        const data = [];
        childSnapshot.forEach((doc) => {
          data.push({
            key: doc.key,
            comments: doc.toJSON().comments,
          });
          this.setState({
            data: data,
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  renderItem = (item) => {
    return (
      <>
        <Text style={styles.title}>{item.co}</Text>
      </>
    );
  };
  keyExtractor = (item, index) => index.toString();
  //Separator
  ItemSeparatorComponent = () => <View style={styles.separator}></View>;
  render() {
    // const data = this.state.data;
    console.log(this.state.data);
    const route = this.props.route.params;
    const item = route.item;
    const index = route.index;
    console.log(route.index);

    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Image
                resizeMode={'cover'}
                source={{uri: item.banner}}
                style={styles.img}
                PlaceholderContent={<ActivityIndicator />}></Image>
            </View>
            <View style={[styles.viewAvt, {translateX: 10}, {translateY: 160}]}>
              <Avatar
                avatarStyle={{resizeMode: 'contain'}}
                rounded
                size="large"
                source={{uri: item.logo}}></Avatar>
            </View>
            <View style={styles.viewInfo}>
              <Text style={styles.txtTitle}>{item.title}</Text>
              <View>
                <Text
                  style={{marginTop: 10, marginBottom: 5, fontWeight: '700'}}>
                  Giới thiệu công ty
                </Text>
                <Text style={{textAlign: 'justify'}}>{item.content}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: 'auto',
              height: 'auto',
              margin: 15,
            }}>
            <Text style={{fontStyle: 'italic'}}>Đánh giá</Text>
            <FlatList
              data={this.state.data}
              renderItem={({item, index}) => {
                return <Text style={styles.title}>{item.comments}</Text>;
              }}
              // ListEmptyComponent={this.ListEmptyComponent}
              keyExtractor={this.keyExtractor}
            />
          </View>
        </ScrollView>

        <View>
          <TextInput
            value={this.state.comments}
            placeholder="Viết đáng giá..."
            style={styles.comments}
            onChangeText={this.comments}></TextInput>
          <TouchableOpacity
            disabled={this.state.disabled}
            onPress={() => this.save(index)}
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: WIDTH,
    height: 200,
  },
  viewAvt: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 71,
    borderWidth: 0.2,
  },
  viewInfo: {
    flex: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00b14f',
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
  container1: {
    flex: 1,
    // backgroundColor: 'red',
    //Shadow item
  },
  title: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});
