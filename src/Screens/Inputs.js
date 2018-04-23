
/**
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'

import Input from '../Components/Input/Input'

type Props = { navigation: {navigate: (screen: string, options: any) => void} };

export default class InputScreen extends Component<Props> {

  static navigationOptions = {
    title: 'Inputs'
  }

  render() {
    return (
      <View>
        <Input />
      </View>
    )
  }

}