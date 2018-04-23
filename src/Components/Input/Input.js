
/**
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, Text, TextInput, View } from 'react-native'

type Props = {};
type State = {text: string};

export default class Input extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {text: ''}
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text: string) => this.setState({text})}
        />
        <Text>{this.state.text.split(' ').map(word => word && '🍕').join(' ')}</Text>
      </View>
    )
  }

}