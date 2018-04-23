
/**
 * @flow
 */

import React from 'react'
import { AppRegistry, Alert, Button, StyleSheet, View } from 'react-native'

type Props = {};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default class ButtonBasics extends React.Component<Props> {

  _onPressButton() {
    Alert.alert('You tapped the button')
  }

  render() {
    return (
      <View>
        <View>
          <Button
            onPress={this._onPressButton}
            title='Press Me'
          />
        </View>
      </View>
    )
  }
}
