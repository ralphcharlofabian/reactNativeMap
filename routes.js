import React from 'react';
import { Button, View, Text } from 'react-native';
//import { StackNavigator } from '../../../.cache/typescript/2.6/node_modules/@types/react-navigation';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './module/homeScreen/homeScreen';
import GoogleMaps from './module/googleMaps/googleMaps';
import ChatApp from './module/chatMessages/chatHome';
import Conversation from './module/chatMessages/conversation';
import ToDoList from './module/toDoList/toDoList';
const RootStack = StackNavigator(
    {
        HomeScreen: {
            screen : HomeScreen,
        },
        GoogleMaps :{
            screen : GoogleMaps,
        },
        ChatApp :{
            screen : ChatApp,
        },
        Conversation:{
            screen : Conversation
        },
        ToDoList :{
            screen : ToDoList,
        }
    },
    {
        initialRouteName: 'HomeScreen'
    }
)


export default class Routes extends React.Component {
    render(){
        return <RootStack/>;
    }
}