import React from 'react';
import {View, Text} from 'react-native';
import CButtons from '../../Components/CButtons';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class Example2Screen extends React.Component {
    constructor(props){
        super();
        this.state = {
            isLoading : false,
            username: "",
            password: ""
        }
    }
    
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {getParam} = this.props.navigation;
        return (
            <View style={{flexDirection: "column", flex: 1, color: "grey"}}>
                <View
                    style={{ flex: 1,
                        margin: 20, 
                        flexDirection: "column",
                        backgroundColor: "white"}}>
                    {/* return TextField <- deprected */}
                    <PasswordInputText
                        value={this.state.password}
                        onChangeText={ (password) => this.setState({ password }) }
                    />
                </View>

                <View style={{ flex: 1, 
                    flexDirection: "column",
                    backgroundColor: "red"}}>
                    <Text>{getParam("username")}</Text>
                </View>

                {/* <View style={{ flex: 3, 
                    flexDirection: "column",
                    backgroundColor: "black"}}>
                    <Text>{getParam("username")}</Text>
                </View> */}

                    <CButtons
                        style={{
                            flex: 1, 
                            flexDirection: "column",
                        }}
                        title="Login"
                        color="grey"
                        onPress={() => this.props.navigation.navigate('Login', {name: 'Jane'})}
                    />

                {/* <View style={{ flex: 1, 
                    flexDirection: "column",
                    backgroundColor: "white"}}>
                    <Text>{getParam("username")}</Text>
                </View> */}

            </View>
        );
    }
}