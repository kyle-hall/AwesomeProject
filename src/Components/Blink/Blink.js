
/**
 * @flow
 */

import React from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';

type State = {isShowingText: boolean}
type Props = {text: string}

export default class Blink extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { isShowingText: true }

    setInterval(() => {
      this.setState((previousState: State) => {
        return { isShowingText: !previousState.isShowingText }
      })
    }, 1000)
  }

  render () {
    let display = this.state.isShowingText ? this.props.text : ' '
    return (
      <Text>{display}</Text>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Blink)
