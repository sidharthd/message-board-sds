import React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet } from 'react-native';

import Header from './Header.js';
import Messages from './Messages.js';
import NewMessage from './NewMessage.js';

export default Home = ( props ) => (
  <KeyboardAvoidingView
    behavior = {'padding'}
    style = {styles.container}
  >
    <Header />
    <Messages />
    <NewMessage
      author = { props.navigation.state.params.author }
    />
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
