import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {Avatar, Image} from 'react-native-elements';
const WIDTH = Dimensions.get('window').width;

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
    if (text.length > 0) {
      this.setState({comments: text, disabled: false});
    } else {
      this.setState({disabled: true});
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
    });
  }
  componentDidMount() {
    const url = 'https://congtimviec.firebaseio.com/top/0/comments.json';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json, loading: false});
        console.log(this.state.data);
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
  renderItem = (item) => {
    return (
      <>
        <View style={styles.container1}>
          <View style={styles.info}>
            <Text style={styles.title}>{item.comments}</Text>
          </View>
        </View>
      </>
    );
  };
  keyExtractor = (item, index) => index.toString();
  //Separator
  ItemSeparatorComponent = () => <View style={styles.separator}></View>;
  render() {
    console.log(this.state.data);
    // const route = this.props.route.params;
    // const item = route.item;
    // const index = route.index;
    // console.log(route.index);
    return (
      <>
        {/* <ScrollView>
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
                {/* <Text>{this.state.dataComment}</Text> */}
        {/* </View> */}
        {/* </View>
          </View> */}
        {/* </ScrollView> */}

        <FlatList
          extraData={this.state}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}></FlatList>

        {/* <View>
          <TextInput
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
        </View> */}
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
    backgroundColor: 'red',
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
    height: 'auto',
    marginLeft: 5,
    marginRight: 5,
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
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'blue',
    fontWeight: 'bold',
  },
});
