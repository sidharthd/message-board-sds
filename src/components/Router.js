import React from 'react';

import { StackNavigator } from 'react-navigation';

import Home from './Home.js';
import Login from './Login.js';
import SignUp from './SignUp.js';

export default StackNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Home: {
    screen: Home
  }
},{
  headerMode: 'none'
})
