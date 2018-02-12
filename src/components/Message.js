import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
  render() {
    return(
      <View style = {styles.message}>
        <Text style = {styles.author}>{ this.props.author }</Text>
        <Text style = {styles.messageText}>{ this.props.message }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: 'darkblue',
    padding: 20,
    marginVertical: 10,
  },
  author: {
    fontSize: 20,
    color: 'cyan',
  },
  messageText: {
    fontSize: 18,
    color: 'white'
  }
})
