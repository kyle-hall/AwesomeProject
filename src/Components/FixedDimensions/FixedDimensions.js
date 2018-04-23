
/**
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  small: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  med: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  large: {
    flex: 3,
    backgroundColor: 'steelblue'
  },
  container: {
    flex: 1
  },
  center: {
    textAlign: 'center'
  }
})

type Props = {};
export default class FixedDimensions extends Component<Props> {
  static navigationOptions = {
    title: 'Sizing'
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.center}>Sizing Demo</Text>
        <View style={styles.small} />
        <View style={styles.med} />
        <View style={styles.large} />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => FixedDimensions)