/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import Svg, {
  Rect,
} from 'react-native-svg';

function onPress() { console.log('onPress'); }
function onPressIn() { console.log('onPressIn'); }
function onPressOut() { console.log('onPressOut'); }

export default class touchesMove extends Component {
  constructor(props) {
    super(props);

    this.state = { event: 'Last press event will be shown here.' };
    this.handlers = {
      onPress: () => { this.setEvent('onPress') },
      onPressIn: () => { this.setEvent('onPressIn') },
      onPressOut: () => { this.setEvent('onPressOut') },
    };
  }

  setEvent(event) {
    this.setState({ event });
  }

  render() {
    return (
      <View style={styles.container}>
        <Svg width={200} height={200}>
          <Rect fill='navy' width={300} height={500} {...this.handlers} />
          <Text x={100} y={100} style={styles.text}>{'react-native-svg <Rect>'}</Text>
        </Svg>
        <TouchableWithoutFeedback {...this.handlers}>
          <View style={styles.demo}><Text style={styles.text}>{'react-native <View>'}</Text></View>
        </TouchableWithoutFeedback>
        <Text>{this.state.event}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  demo: {
    width: 200,
    height: 200,
    backgroundColor: 'orange',
  },
  text: { color: 'white' },
});

AppRegistry.registerComponent('touchesMove', () => touchesMove);
