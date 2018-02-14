import React from 'react';
import { View, TextInput, StyleSheet, Button, ActivityIndicator, Keyboard } from 'react-native';
import axios from 'axios';

export default class NewMessage extends React.Component {

  constructor() {
    super();
    this.state = {
      message: '',
      submitting: false,
    }
  }

  postMessage = () => {
    Keyboard.dismiss();
    this.setState({
      submitting: true
    })
    axios.post('http://mb-sds.herokuapp.com/api/1/post-message/', {
      message: this.state.message,
      author: this.props.author
    }).then( response => {
      this.setState({
        message: '',
        submitting: false
      })
    })
  }

  render() {
    return(
      <View style = {styles.container}>
        <TextInput
          value = {this.state.message}
          style = {styles.input}
          placeholder = {'Type your message here'}
          underlineColorAndroid = {'transparent'}
          onChangeText = { (text) => {
            this.setState({
              message: text
            })
          }}
        />

        {
          this.state.submitting ?
            <ActivityIndicator />
          :
          <Button
            title = {'Send'}
            onPress = { this.postMessage }
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'grey',
    borderTopWidth: .5,
  },
  input: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
})
