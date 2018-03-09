import React from 'react';

import { View, Text, TextInput } from 'react-native';
import { StackNavigation } from 'react-navigation';
import { ThemeProvider, Button } from 'react-native-material-ui';


export default class Conversation extends React.Component { 
    render () {

        const { params } = this.props.navigation.state;
        var name = params.userName; 
        return(
            <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left' }}>
                 <Text>{JSON.stringify(name) } test</Text>
                
            </View>
        );
    }
}
{/* <GiftedChat
                    messages={this.state.messages}
                    onSend={(message)=>{
                        //for backend https://www.youtube.com/watch?v=7Ot5LSGHLyY reference https://github.com/FaridSafi/react-native-gifted-chat
                        // https://www.youtube.com/watch?v=915vvTQV_tI reference https://school.shoutem.com/lectures/chat-app-firebase-redux-react-native/
                        //
                    }}
                    user={{
                      _id: 1,
                    }}
      /> */}