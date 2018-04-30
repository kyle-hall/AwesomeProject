
/**
 * @flow
*/

import React from 'react'
import {
  Alert,
  Picker,
  Platform,
  ScrollView,
  Slider,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from 'react-native'

type Props = {};
type State = {
  language: string,
  sliderValue: number,
  flipped: boolean
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

export default class Touchables extends React.Component<Props, State> {
  state = {
    language: 'ruby',
    sliderValue: 1,
    flipped: true
  }

  _onPressButton() {
    Alert.alert('You tapped the button')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button')
  }

  render() {
    const touchableNativeFeedbackElement = Platform.OS === 'android' ? (
      <TouchableNativeFeedback
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}
            background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
    ) : (
      <TouchableWithoutFeedback
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
    )

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableHighlight
          onPress={this._onPressButton}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        {touchableNativeFeedbackElement}
        <Text>{this.state.language}</Text>
        <Picker
          style={{height: 150, width: 100}}
          selectedValue={this.state.language}
          onValueChange={(itemValue: string, itemIndex: number) => {
            this.setState({
              language: itemValue,
              sliderValue: this.state.sliderValue,
              flipped: this.state.flipped
            })}
          }
        >
          <Picker.Item label="Java" value="java"/>
          <Picker.Item label="JavaScript" value="javascript" />
          <Picker.Item label="Scala" value="scala" />
          <Picker.Item label="Ruby" value="ruby" />
          <Picker.Item label="Elixir" value="elixir" />
          <Picker.Item label="Elm" value="elm" />
          <Picker.Item label="Smalltalk" value="smalltalk" />
        </Picker>
        <View style={{marginTop: 50}}>
          <Text>Slider value is: {this.state.sliderValue}</Text>
          <Slider
          style={{width: 100, marginTop: 50}}
            minimumTrackTintColor='red'
            maximumValue={10}
            minimumValue={1}
            value={this.state.sliderValue}
            onValueChange={(itemValue: number, itemIndex: number) => {
              this.setState({
                language: this.state.language,
                sliderValue: itemValue,
                flipped: this.state.flipped
              })
            }}
            step={1}
          />
          <Switch
            value={this.state.flipped}
            onValueChange={(itemValue: boolean, itemIndex: number) => {
              this.setState({
                language: this.state.language,
                sliderValue: this.state.sliderValue,
                flipped: itemValue
              })
            }}
          ></Switch>
          <View style={{height: 300}}></View>
        </View>
      </ScrollView>
    )
  }
}
