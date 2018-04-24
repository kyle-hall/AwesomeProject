
/**
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'

import FlatListDemo from '../Components/Lists/FlatListDemo'
import SectionListDemo from '../Components/Lists/SectionListDemo'

type Props = { navigation: {navigate: (screen: string, options: any) => void} };

export default class ListScreen extends Component<Props> {

  static navigationOptions = {
    title: 'Lists'
  }

  render() {
    return (
      <View style={{display: 'flex', flex: 1}}>
        <FlatListDemo />
        <SectionListDemo />
      </View>
    )
  }
}