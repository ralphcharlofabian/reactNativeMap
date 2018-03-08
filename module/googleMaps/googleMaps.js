import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeProvider, Button } from 'react-native-material-ui';
import MapView from 'react-native-maps';


export default class GoogleMaps extends React.Component {
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
      },
      sampleHospitals:
      [
            {
            title: 'hospital 1',
            coordinates:{
                latitude: 14.5650,
                longitude: 121.0235,
                }
            },
            {
            title: 'Trans Global Health System Inc.',
            coordinates:{
                latitude: 14.565555,
                longitude: 121.008658,
                }
            },
            {
            title: 'hospital 3',
            coordinates:{
                latitude: 14.5547,
                longitude: 121.0244,
                }
            },
            {
            title: 'Makati Medical Center',
            coordinates:{
                latitude: 14.5593,
                longitude: 121.0145,
                }
            }
        ],
        findHospital: false
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
  onFindHospitals(){

      this.setState({findHospital: true})
  }

  render() {
    return (
        <View style = {styles.container}>
            <MapView style = {styles.map} 
              region={this.state.region}
            >
            {/* <MapView.Marker 
                coordinate={{
                latitude: 14.5495,
                longitude: 121.0269,
                }}
                title='sample marker'
                pinColor='turquoise'
            /> */}
                {this.state.findHospital?
                this.state.sampleHospitals.map((marker,i) => (
                    <MapView.Marker 
                      key ={i}
                      coordinate={marker.coordinates}
                      title={marker.title}
                      pinColor='turquoise'
                    />
                  ))
                : null }
                <MapView.Marker 
                 coordinate={this.state.marker}
                 title='youre here'
                
              />
            </MapView>
            <Button
            onPress = {this.onFindHospitals.bind(this)}
            primary
            raised
            text = 'Find Nearest Hospitals'
            > </Button>
        </View>
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
