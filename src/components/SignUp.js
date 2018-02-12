import React from 'react';
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

import axios from 'axios';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  signup = () => {
    const { name, email, password } = this.state;

    if ( !name || !email || !password ) {
      alert( 'Please fill out both fields.' )
    }
    else {
      axios.post('https://mb-sds.herokuapp.com/api/1/signup/', {
        name, email, password
      }).then( response => {
        const { result, author, error } = response.data;
        if ( result == 'success' ) {
          Keyboard.dismiss();
          this.props.navigation.navigate( 'Home', { 'author': author } );
        }
        else if ( error == 'email' ) {
          alert( 'Email already exists. Please login.' );
        }
        else {
          alert( 'Error. Please try again.' );
        }
      }).catch( error => { console.error( error ) } )
    }
  }

  render() {
    return(
      <View style = { styles.container }>
        <View style = { styles.inputWrapper }>
          <TextInput
            placeholder = { 'Your name' }
            style = { styles.input }
            underlineColorAndroid = { 'transparent' }
            placeholderTextColor  = { 'rgba(255, 255, 255, 0.7)' }
            selectionColor = { 'rgba(255, 255, 255, 0.5)' }
            autoCapitalize = { 'words' }
            onChangeText = { ( name ) => { this.setState({ name }) } }
          />
          <TextInput
            placeholder = { 'Your email' }
            style = { styles.input }
            underlineColorAndroid = { 'transparent' }
            placeholderTextColor  = { 'rgba(255, 255, 255, 0.7)' }
            selectionColor = { 'rgba(255, 255, 255, 0.5)' }
            autoCapitalize = { 'none' }
            keyboardType = { 'email-address' }
            onChangeText = { ( email ) => { this.setState({ email }) } }
          />
          <TextInput
            placeholder = { 'Choose a password' }
            style = { styles.input }
            underlineColorAndroid = { 'transparent' }
            placeholderTextColor  = { 'rgba(255, 255, 255, 0.7)' }
            selectionColor = { 'rgba(255, 255, 255, 0.5)' }
            autoCapitalize = { 'none' }
            secureTextEntry = { true }
            onChangeText = { ( password ) => { this.setState({ password }) } }
          />
          <TouchableOpacity
            style = { styles.button }
            onPress = { this.signup }
          >
            <Text style = { styles.buttonText }>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: 'rgb(0, 128, 128)',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  inputWrapper: {
    width: 300,
  },
  input: {
    marginVertical: 5,
    fontSize: 16,
    borderRadius: 2,
    paddingHorizontal: 20,
    height: 50,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
    borderRadius: 2,
    elevation: 6,
  },
  buttonText: {
    color: 'teal',
    fontSize: 16,
    fontWeight: 'bold'
  },
})
