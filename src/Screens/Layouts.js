
/**
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'

import FixedDimensions from '../Components/FixedDimensions/FixedDimensions'

type Props = { navigation: {navigate: (screen: string, options: any) => void} };

export default class LayoutScreen extends Component<Props> {

  static navigationOptions = {
    title: 'Layout'
  }

  render() {
    return (
      <View style={{display: 'flex', flex: 1}}>
        <FixedDimensions />
      </View>
    )
  }
}
