
/**
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, ScrollView, StyleSheet, Text, View, Button } from 'react-native'

import Banana from '../Components/Banana/Banana'
import Blink from '../Components/Blink/Blink'
import NavBar from '../Components/Nav/NavBar'

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
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}
        >
          <Banana></Banana>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
          <Text style={styles.instructions}>
            To start, modify App.js
          </Text>
        </ScrollView>
        <View style={{flex: 0.1}}>
          <NavBar navigation={this.props.navigation}/>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Home)
