import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default class Imageslide extends Component {
  render() {
    const images = [
      require('../src/images/1.jpg'),
      require('../src/images/2.png'),
      require('../src/images/3.jpg'),
    ];
    return (
      <ImageSlider
        loopBothSides
        autoPlayWithInterval={3000}
        images={images}
        customSlide={({index, item, style, width}) => (
          // It's important to put style here because it's got offset inside
          <View key={index}>
            <Image
              source={require('../src/images/1.jpg')}
              style={{width: 200, height: 200}}
            />
          </View>
        )}
      />
    );
  }
}
const styles = StyleSheet.create({
  imagecustom: {
    height: 200,
    width: 200,
  },
});
