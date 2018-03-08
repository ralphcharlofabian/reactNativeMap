import React from 'react';

import { View, Text, TextInput } from 'react-native';
import { StackNavigation } from 'react-navigation';
import { ThemeProvider, Button } from 'react-native-material-ui';


export default class Conversation extends React.Component { 
    render () {

		const { state } = this.props.navigation;
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                 <Text>{state.params.username} test</Text>
                
            </View>
        );
    }
}