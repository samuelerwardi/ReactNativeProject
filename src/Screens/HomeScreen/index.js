import React from 'react';
import {View, Text} from 'react-native';
import CButtons from '../../Components/CButtons';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {getParam} = this.props.navigation;
        return (
            <View style={{ flex: 1, 
                flexDirection: "column",
                backgroundColor: "white"}}>
                <Text>{getParam("username")}</Text>
                <CButtons
                    title="Go to Jane's profile"
                    onPress={() => this.props.navigation.navigate('Login', {name: 'Jane'})}
                />
            </View>
        );
    }
}