
/**
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'

import Banana from '../Components/Banana/Banana'
import Blink from '../Components/Blink/Blink'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#229',
    marginBottom: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 10
  }
})

type Props = { navigation: {navigate: (screen: string, options: any) => void} };

export default class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>
        <Banana></Banana>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To start, modify App.js
        </Text>
        <Button
          title='Sizing'
          onPress={() => this.props.navigation.navigate('Sizing')}
        />
        <Button
          title='Inputs'
          onPress={() => this.props.navigation.navigate('Inputs')}
        />
        <Button
          title='Lists'
          onPress={() => this.props.navigation.navigate('Lists')}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Home)
