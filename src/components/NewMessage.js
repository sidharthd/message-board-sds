import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default class NewMessage extends React.Component {
  render() {
    return(
      <View style = {styles.container}>
        <TextInput
          style = {styles.input}
          placeholder = {'Type your message here'}
          underlineColorAndroid = {'transparent'}
        />
        <Button
          title = {'Send'}
          onPress = {() => {}}
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
