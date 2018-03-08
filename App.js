import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, Button } from 'react-native-material-ui';
import GoogleMaps from './module/googleMaps/googleMaps';
import Routes from './routes';

export default class App extends React.Component{
  constructor(props){
    super (props);
    this.state = {

    }
  }


  render(){
    return (
      <ThemeProvider>
          {/* <GoogleMaps/> */}
          <Routes/>
      </ThemeProvider>
    )
  }
}