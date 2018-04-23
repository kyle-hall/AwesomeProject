
/**
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: 193,
    height: 110
  }
})

type Props = {};

export default class Banana extends Component<Props> {
  render () {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return <Image source={pic} style={styles.img} />
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Banana)