import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}>Message Board</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
})
