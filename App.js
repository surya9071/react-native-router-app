import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import SignInScreen from './screens/sign-in';
import SignUpScreen from './screens/sign-up';
import ForgotPasswordScreen from './screens/forgot-password';

const App = StackNavigator({
  SignInScreen,
  SignUpScreen,
  ForgotPasswordScreen

},{
  initialRouteName:'SignInScreen'
})
export default App;



