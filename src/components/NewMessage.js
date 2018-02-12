import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import axios from 'axios';

export default class NewMessage extends React.Component {

  postMessage = () => {
    axios.post('http://mb-sds.herokuapp.com/api/1/post-message/', {
      message: this.state.message
    }).then( response => {

    })
  }

  render() {
    return(
      <View style = {styles.container}>
        <TextInput
          style = {styles.input}
          placeholder = {'Type your message here'}
          underlineColorAndroid = {'transparent'}
          onChangeText = { (text) => {
            this.setState({
              message: text
            })
          }}
        />
        <Button
          title = {'Send'}
          onPress = { this.postMessage }
        />
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
    padding: 20,
  }
})
