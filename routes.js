import React from 'react';
import { Button, View, Text } from 'react-native';
import GoogleMaps from './module/googleMaps/googleMaps';
//import { StackNavigator } from '../../../.cache/typescript/2.6/node_modules/@types/react-navigation';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './module/homeScreen/homeScreen';

const RootStack = StackNavigator(
    {
        Home: {
            screen : HomeScreen,
        },
        Details :{
            screen : GoogleMaps,
        }
    },
    {
        initialRouteName: 'Home'
    }
)


export default class Routes extends React.Component {
    render(){
        return <RootStack/>;
    }
}