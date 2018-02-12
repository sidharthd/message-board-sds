import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import io from 'socket.io-client';

import Message from './Message.js';

export default class Messages extends React.Component {

  constructor() {
    super();

    console.ignoredYellowBox = [
      'Setting a timer for a long period of time'
    ]

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const socket = io.connect(
      'https://mb-sds.herokuapp.com',
      {transports: ['websocket']}
    )
    socket.on('connect', () => {
      console.log('Connected to realtime server');
    })

    socket.on('new message', (response) => {
      this.setState({
        messages: [response, ...this.state.messages]
      })
    })

    axios.get('http://mb-sds.herokuapp.com/api/1/get-messages/')
    .then( response => {
      this.setState({
        messages: response.data.messages
      })
    })
  }

  renderMessage = ( {item} ) => {
    return(
      <Message
        author = {item.author}
        message = {item.message}
      />
    );
  }

  render() {
    return(
      <View style = {styles.container}>
        <FlatList
          data = {this.state.messages}
          renderItem = {this.renderMessage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
})
