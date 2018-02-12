import React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet } from 'react-native';

import Header from './Header.js';
import Messages from './Messages.js';
import NewMessage from './NewMessage.js';

export default Home = () => (
  <KeyboardAvoidingView
    behavior = {'padding'}
    style = {styles.container}
  >
    <Header />
    <Messages />
    <NewMessage />
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
