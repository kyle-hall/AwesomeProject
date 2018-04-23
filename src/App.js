/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import { StackNavigator } from 'react-navigation'

import Home from './Screens/Home'
import FixedDimensions from './Components/FixedDimensions/FixedDimensions'
import Input from './Components/Input/Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

const RootStack = StackNavigator(
  {
    Home: { screen: Home },
    Sizing: { screen: FixedDimensions },
    Inputs: { screen: Input}
  },
  {
    initialRouteName: 'Home'
  }
)

type Props = {}

export default class App extends Component<Props> {

  render() {
    return (
      <RootStack />
    )
  }
}
