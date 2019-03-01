import React from 'react';
import { AppRegistry } from 'react-native';

import Dashboard from './src/screens/dashboard/index';

export default class App extends React.Component{
  render(){
    return (<Dashboard />);
  }
}

AppRegistry.registerComponent('App', () => App);