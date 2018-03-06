import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeProvider, Button } from 'react-native-material-ui';
import MapView from 'react-native-maps';




export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <View style = {styles.container}>
            <MapView style = {styles.map} 
              region={{
                latitude: 14.5547,
                longitude: 121.0244,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
              }}
            />
          <Button primary text="Primary" />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  map :{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
