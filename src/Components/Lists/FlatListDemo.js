
/**
 * @flow
*/

import React from 'react'
import { ActivityIndicator, StyleSheet, FlatList, Text, View } from 'react-native'

type Props = {};
type State = {
  isLoading: boolean,
  dataSource: {
    [x: string] : any
  }[]
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default class FlatListDemo extends React.Component<Props, State> {

  state = {
    isLoading: true,
    dataSource: []
  }

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        })
      })
      .catch((error) => console.error(error))
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{flex: 1, padding: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
        />
      </View>
    )
  }

}