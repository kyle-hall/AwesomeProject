
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
  },
  scrollingCard: {
    height: 250,
    width: 190,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 2,
    shadowOpacity: 1.0
  },
  blue: {
    backgroundColor: '#0074D9'
  },
  green: {
    backgroundColor: '#2ECC40'
  },
  purple: {
    backgroundColor: '#B10DC9',
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
        <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
          <Banana></Banana>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Blink style={styles.instructions} text="This is some blinking text."/>
          <Blink style={styles.instructions} text="'Cause we're gonna party like it's 1999"/>
          <View style={{flex: 1, marginTop: 30}}>
            <ScrollView horizontal={true}>
              <View style={[styles.scrollingCard, styles.green]}><Text>1</Text></View>
              <View style={[styles.scrollingCard, styles.purple]}><Text>2</Text></View>
              <View style={[styles.scrollingCard, styles.blue]}><Text>3</Text></View>
              <View style={[styles.scrollingCard, styles.green]}><Text>4</Text></View>
              <View style={[styles.scrollingCard, styles.purple]}><Text>5</Text></View>
              <View style={[styles.scrollingCard, styles.blue]}><Text>6</Text></View>
              <View style={[styles.scrollingCard, styles.green]}><Text>7</Text></View>
              <View style={[styles.scrollingCard, styles.blue]}><Text>8</Text></View>
            </ScrollView>
          </View>
          <View style={{flex: 1, marginTop: 20}}>
            <ScrollView horizontal={true}>
              <View style={[styles.scrollingCard, styles.blue]}><Text>1</Text></View>
              <View style={[styles.scrollingCard, styles.green]}><Text>2</Text></View>
              <View style={[styles.scrollingCard, styles.purple]}><Text>3</Text></View>
              <View style={[styles.scrollingCard, styles.blue]}><Text>4</Text></View>
              <View style={[styles.scrollingCard, styles.green]}><Text>5</Text></View>
              <View style={[styles.scrollingCard, styles.purple]}><Text>6</Text></View>
              <View style={[styles.scrollingCard, styles.blue]}><Text>7</Text></View>
              <View style={[styles.scrollingCard, styles.green]}><Text>8</Text></View>
            </ScrollView>
          </View>
        </ScrollView>
        <View style={{flex: 0.1}}>
          <NavBar navigation={this.props.navigation}/>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Home)
