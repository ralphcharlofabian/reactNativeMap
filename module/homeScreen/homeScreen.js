import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigation } from 'react-navigation';

import { ThemeProvider, Button } from 'react-native-material-ui';
export default class HomeScreen extends React.Component {
    render(){
        return(
            //<ThemeProvider>
                <View  style={styles.container}>
                    <View style={styles.header} >
                        <Text style={styles.headerText}>Hi Welcome to my App</Text>
                    </View>
                    <View style={styles.note}>
                    <Button
                        primary
                        raised
                        text = 'Google Map'
                        onPress={()=> this.props.navigation.navigate('GoogleMaps')}
                    />
                    </View>
                    <View style={styles.note}>
                    <Button
                        primary
                        raised
                        text = 'To Do List'
                        onPress={()=> this.props.navigation.navigate('ToDoList')}
                    />
                    </View>
                    <View style={styles.note}>
                    <Button
                        primary
                        raised
                        text = 'Chat Me Up'
                        onPress={()=> this.props.navigation.navigate('ChatApp')}
                    />
                    </View>
                </View>
           //</ThemeProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#36e2f0',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    note: {
        position: 'relative',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
});