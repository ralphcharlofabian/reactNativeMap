import React from 'react';

import { View, Text, TextInput, ListView, TouchableHighlight } from 'react-native';
import { StackNavigation } from 'react-navigation';
import { ThemeProvider, Button } from 'react-native-material-ui';


export default class Conversation extends React.Component { 

    constructor(props){
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2
        });
        this.state ={
            itemDataSource: ds
        }

        this.renderRow = this.renderRow.bind(this);
        this.pressRow = this.pressRow.bind(this);
    }

    componentWillMount(){
        this.getItems();
    }

    componentDidMount(){
        this.getItems();
    }

    getItems(){
        let items =[{title:'itemOne'},{title:'item two'}];

        this.setState({
            itemDataSource: this.state.itemDataSource.cloneWithRows(items)
        });
    }

    pressRow(item){
        
    }

    renderRow(item){
        return(
            <TouchableHighlight onPress={() => {
                this.pressRow(item);
            }}>
                <View>
                    <Text>
                        {item.title}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    render () {

        const { params } = this.props.navigation.state;
        var name = params.userName; 
        return(
            <View style={{ flex: 1, alignItems: 'top', justifyContent: 'top' }}>
                 <Text>{JSON.stringify(name) } test</Text>
                
                <ListView 
                    dataSource={this.state.itemDataSource}
                    renderRow = {this.renderRow} 
                />
            </View>
        );
    }
}
