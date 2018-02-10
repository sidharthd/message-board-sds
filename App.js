import React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet } from 'react-native';

import Header from './src/components/Header.js';
import Messages from './src/components/Messages.js';
import NewMessage from './src/components/NewMessage.js';

export default class App extends React.Component {
  render() {
    return(
      <KeyboardAvoidingView
        behavior = {'padding'}
        style = {styles.container}
      >
        <Header />
        <Messages />
        <NewMessage />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
