import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeProvider, Button } from 'react-native-material-ui';
import MapView from 'react-native-maps';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      region: {
        latitude: 14.5547,
        longitude: 121.0244,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      },
      marker:{
        latitude: 14.5547,
        longitude: 121.0244,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    }
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition((position)=> {
      this.setState({
        region:{
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        },
        marker: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      })
    },
    (error) => console.log(error,'eeerrrrroooooorr'),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
  }


  render() {
    return (
      <ThemeProvider>
        <View style = {styles.container}>
            <MapView style = {styles.map} 
              region={this.state.region}
            >
            <MapView.Marker 
                coordinate={{
                latitude: 14.5547,
                longitude: 121.0244,
                }}
                title='sample marker'
              />
               <MapView.Marker 
                coordinate={this.state.marker}
                title='youre here'
              />
            </MapView>
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
