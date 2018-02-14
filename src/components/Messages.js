import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
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
      messages: [],
      laodingMessages: true
    }
  }

  componentDidMount() {
    axios.get('http://mb-sds.herokuapp.com/api/1/get-messages/')
    .then( response => {
      this.setState({
        messages: response.data.messages,
        laodingMessages: false
      })
    })

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
    if (this.state.loadingMessages) {
      return(
        <View style = {styles.container}>
          <ActivityIndicator size = { 'large' } />
        </View>
      );
    }
    else {
      return(
        <View style = {styles.container}>
          {
            this.state.messages.length == 0 ?
              <View style = {styles.noMessages}>
                <Text style = {styles.noMessagesText}>
                  No messages to show.
                </Text>
              </View>

            :

              <FlatList
                data = {this.state.messages}
                renderItem = {this.renderMessage}
              />
          }

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  noMessages: {
    alignItems: 'center'
  },
  noMessagesText: {
    color: 'grey',
    fontSize: 16,
  },
})
