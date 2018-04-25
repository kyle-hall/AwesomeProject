
/**
 * @flow
 */

import React, { Component } from 'react'
import { Alert, StyleSheet, Text, View, Button } from 'react-native'

type Props = { navigation: {navigate: (screen: string, options: any) => void}};

export default class NavBar extends React.Component<Props> {

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      }}>
        <Button
          onPress={() => this.props.navigation.navigate('Sizing')}
          title='Sizing'
        />
        <Button
          onPress={() => this.props.navigation.navigate('Inputs')}
          title='Inputs'
        />
        <Button
          onPress={() => this.props.navigation.navigate('Lists')}
          title='Lists'
        />
      </View>
    )
  }

}