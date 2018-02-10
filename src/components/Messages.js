import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

import Message from './Message.js';

export default class Messages extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    axios.get('http://mb-sds.herokuapp.com/api/1/get-messages/')
    .then( response => {
      console.log(response.data);
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
    paddingVertical: 20,
  },
})
