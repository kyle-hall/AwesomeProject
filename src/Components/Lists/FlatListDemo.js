
/**
 * @flow
*/

import React from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'

type Props = {};

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

export default class FlatListDemo extends React.Component<Props> {

  render() {
    const names = [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ]

    return (
      <View style={styles.container}>
        <FlatList
          data={names}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }

}