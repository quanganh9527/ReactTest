import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Routes from './src/route/Routes';
import { createAppContainer } from "react-navigation";
import Store from './src/redux/Store'
import { Provider } from 'react-redux'
const Navigation = createAppContainer(Routes)
export default class App extends Component {
  render() {
   return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}
