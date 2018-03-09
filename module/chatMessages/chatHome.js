import React from 'react';

import { View, Text, TextInput } from 'react-native';

import { ThemeProvider, Button } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';

export default class ChatHome extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            userName: ''
        }
    }
          


    render () {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                 <Text>Enter your name :</Text>
                 <TextInput
                    placeholder = '  Eg. John Snow'
                    style={{height:40,borderWidth:2,borderColor:'gray', margin:20, width: '40%'}}
                    onChangeText={(text) => {this.setState({userName:text})}}
                    value={this.state.userName}
                 />
                    <Button
                        primary
                        raised
                        text = 'Enter Name'
                        onPress={()=> this.props.navigation.navigate('Conversation', {userName : this.state.userName})}
                    />
            </View>
        );
    }
}