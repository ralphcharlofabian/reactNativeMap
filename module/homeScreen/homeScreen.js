import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigation } from 'react-navigation';

import { ThemeProvider, Button } from 'react-native-material-ui';
export default class HomeScreen extends React.Component {
    render(){
        return(
            //<ThemeProvider>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Screen</Text>
                    <Button
                        primary
                        raised
                        text = 'My Location'
                        onPress={()=> this.props.navigation.navigate('Details')}
                    />
                </View>
           // </ThemeProvider>
        )
    }
}