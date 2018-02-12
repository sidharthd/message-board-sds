import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class SignUp extends React.Component {
  render() {
    return(
      <View>
        <TextInput
          placeholder = { 'Your name' }
          style = { styles.input }
          underlineColorAndroid = { 'transparent' }
        />
        <TextInput
          placeholder = { 'Your email' }
          style = { styles.input }
          underlineColorAndroid = { 'transparent' }
          keyboardType = { 'email-address' }
        />
        <TextInput
          placeholder = { 'Your password' }
          style = { styles.input }
          underlineColorAndroid = { 'transparent' }
          secureTextEntry = { true }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {

  }
})
