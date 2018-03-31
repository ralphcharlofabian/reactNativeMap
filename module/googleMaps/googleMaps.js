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
            title: 'Khoo Teck Puat Hospital',
            coordinates:{
                latitude: 1.424635,
                longitude: 103.838208,
                }
            },
            {
            title: 'Bright Vision Hospital',
            coordinates:{
                latitude: 1.3721,
                longitude: 103.8781,
                }
            },
            {
            title: 'Mount Alvernia Hospital',
            coordinates:{
                latitude: 1.3419,
                longitude: 103.8379,
                }
            },
            {
            title: 'Parkway East Hospital',
            coordinates:{
                latitude: 1.3151,
                longitude: 103.9090,
                }
            }
        ],
        findHospital: false,
        sampleTouristSpots:[
          {
            title: 'Clarke Quay',
            coordinates:{
                latitude: 1.2906,
                longitude: 103.8465,
                }
            },
            {
            title: 'ArtScience Museum',
            coordinates:{
                latitude: 1.2863,
                longitude: 103.8593,
                }
            },
            {
            title: 'Singapore Zoo',
            coordinates:{
                latitude: 1.4043,
                longitude: 103.7930,
                }
            },
            {
            title: 'SuperTree Grove',
            coordinates:{
                latitude: 1.2820,
                longitude: 103.8639,
                }
            },
            {
              title: 'Marina Baragge',
              coordinates:{
                  latitude: 1.2805,
                  longitude: 103.8712,
                  }
              },
              {
              title: 'Gardens by the Bay',
              coordinates:{
                  latitude: 1.2816,
                  longitude: 103.8636,
                  }
              },
              {
              title: 'Merlion Park',
              coordinates:{
                  latitude: 1.2868,
                  longitude: 103.8545,
                  }
              },
              {
              title: 'Marina Bay Sands',
              coordinates:{
                  latitude: 1.2834,
                  longitude: 103.8607,
                  }
              }
        ],
        findTouristSpots: false
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
  onFindTouristSpots(){

    this.setState({findTouristSpots: true})
}
  render() {
    return (
        <View style = {styles.container}>
            <MapView style = {styles.map} 
              region={this.state.region}
            >
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
             
                {this.state.findTouristSpots?
                this.state.sampleTouristSpots.map((marker,i) => (
                    <MapView.Marker 
                      key ={i}
                      coordinate={marker.coordinates}
                      title={marker.title}
                      pinColor='yellow'
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
            text = 'Find Some Hospitals'
            style={{marginBottom:10}}> </Button>
             <Button
            onPress = {this.onFindTouristSpots.bind(this)}
            primary
            raised
            text = 'Find Some Tourist Spots'
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
