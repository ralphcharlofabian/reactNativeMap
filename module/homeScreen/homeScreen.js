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
                        text = 'Google Map'
                        onPress={()=> this.props.navigation.navigate('GoogleMaps')}
                    />
                    
                     <Button
                        primary
                        raised
                        text = 'Chat Me Up'
                        onPress={()=> this.props.navigation.navigate('ChatApp')}
                    />
                </View>
           // </ThemeProvider>
        )
    }
}