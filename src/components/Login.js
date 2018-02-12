import React from 'react';
import { View, TextInput, Text, Image, Button, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

import axios from 'axios';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  login = () => {
    // Get email and password from state
    const { email, password } = this.state;

    if ( !email || !password ) {
      alert( 'Please fill out both fields.' )
    }
    else {
      axios.post('https://mb-sds.herokuapp.com/api/1/login/', {
        email, password
      }).then( response => {
        const { result, author } = response.data;
        if ( result == 'success' ) {
          Keyboard.dismiss();
          this.props.navigation.navigate( 'Home', { author: author } );
        }
        else {
          alert( 'Invalid login details.' );
        }
      })
    }
  }

  render() {
    return(
      <View style = { styles.container }>
        <Image
          source = { require('../../assets/icon.png') }
          style = { styles.image }
        />
        <View style = { styles.inputWrapper }>
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
            placeholder = { 'Your password' }
            style = { styles.input }
            underlineColorAndroid = { 'transparent' }
            placeholderTextColor  = { 'rgba(255, 255, 255, 0.7)' }
            selectionColor = { 'rgba(255, 255, 255, 0.5)' }
            autoCapitalize = { 'none' }
            secureTextEntry = { true }
            onChangeText = { ( password ) => { this.setState({ password }) } }
          />
          <TouchableOpacity
            style = { styles.loginButton }
            onPress = { this.login }
          >
            <Text style = { styles.loginButtonText }>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = { styles.newAccount }
            onPress = { () => { this.props.navigation.navigate('SignUp') } }
          >
            <Text style = { styles.newAccountText }>
              Create account
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
  loginButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
    borderRadius: 2,
    elevation: 6,
  },
  loginButtonText: {
    color: 'teal',
    fontSize: 16,
    fontWeight: 'bold'
  },
  newAccount: {
    paddingVertical: 10,
  },
  newAccountText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})
