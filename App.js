import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import StackNavigator from './src/components/Router.js';

export default class App extends React.Component {
  render() {
    return(
        <StackNavigator />
    );
  }
}
