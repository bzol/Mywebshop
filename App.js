import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HybridApp } from './src';
import MobileApp from './src/mobile/mobile_app';

export default class App extends React.Component {
  render() {
    return (
      <MobileApp/>
    );
  }
}

