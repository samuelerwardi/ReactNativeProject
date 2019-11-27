import React from 'react';
import {
    View, 
    Text, 
    Button,
    ActivityIndicator,
    ToastAndroid,
    TextInput
} from 'react-native';
import CButtons from '../../Components/CButtons';
import CTextInput from '../../Components/CTextInput';
import styles from "./style";
import config from "../../Config/Config";
import axios from 'axios';
const JSON5 = require('json5');


export default class LoginScreen extends React.Component {
    constructor(props){
        super();
        this.state = {
            isLoading : false,
            username: "",
            password: ""
        }
    }

    _handlerGoToHome = () => {
        this.props.navigation.navigate("Home");
    }

    _handlerSubmit = () => {
        if(this.state.username.length < 5){
            ToastAndroid.show('Username too short', ToastAndroid.SHORT);
        }
        ToastAndroid.show("username : " + this._validateEmail(this.state.username), ToastAndroid.SHORT);
        if(this._validateEmail(this.state.username))
        {
            console.log(this._validateEmail(this.state.username));
            ToastAndroid.show("username : " + this._validateEmail(this.state.username), ToastAndroid.SHORT);
        }
        ToastAndroid.show('username : OKE', ToastAndroid.SHORT);
        this.props.navigation.navigate("Home", {username : this.state.username});
    }

    _validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        ToastAndroid.show("username : " + this.state.username.toLowerCase(), ToastAndroid.SHORT);
        return re.test(email.toLowerCase());
    }

    componentDidMount() {
        axios.post(`${config.baseUrl}`, {
            transformResponse: [
                function(data) {
                  return data.data;
                }
            ]
        })
        .then(function (response) {
            console.log(JSON5.parse(response.data)[0].access_token);
            ToastAndroid.show(JSON5.parse(response.data)[0].access_token, ToastAndroid.SHORT);
            // console.log("response.data[0].access_token : " + response.data[0].access_token);
        })
        .catch(function (error) {
            console.log(error);
        });
        // axios.post(`${config.baseUrl}`, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json;charset=UTF-8'
        //     },
        //     responseType: 'json'
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        // const user = {
        //     name: this.state.name
        // };
        // axios.get(`https://jsonplaceholder.typicode.com/users`, {

        // })
        // .then(res => {
        //   console.log(res);
        //   console.log(res.data[0].name);
        // })

        // console.log(this.state.loading);
        ToastAndroid.show(`${config.baseUrl}`,ToastAndroid.LONG);
        // ToastAndroid.show('A pikachu appeared nearby !1', ToastAndroid.SHORT);
    }

    render() {
        const { navigation } = this.props;
        const {navigate} = this.props.navigation;
        // console.log(this.props.navigation.getParam('name'));
        // console.log(navigation);
        // console.log(navigation);
        // console.log("============================================================");
        // console.log(this.props.navigation.getParam('name'));

        // console.log("state : " + this.props.getParam('name'));
        return (
            <View style={{ flex: 1, 
                            flexDirection: "column",
                            backgroundColor: "white"}}>
                
                <Text>Login Screen</Text>
                <CTextInput 
                    style={styles.formControl}
                    TextInputPlaceholder={"Username"}
                    onChangeText={(val) => {
                        this.setState({username : val})
                    }}
                />
                <CTextInput 
                    styleContainer={{
                        borderWidth: 1,
                        margin: 20
                    }}
                    TextInputPlaceholder={"Password"}
                    isSecureText={true}
                    onChangeText={(val) => {
                        this.setState({password : val})
                    }}
                />
                <CButtons 
                    onPress={() =>{
                        this.setState({
                            isLoading: true
                        },() => {
                            setTimeout(() => {
                                this.setState({isLoading: false})
                            }, 5000)
                        })
                        this._handlerSubmit()
                    }}
                    styleContainer={{
                        flex: 1,
                        margin:20,
                        flexDirection:"column"
                    }}
                    title={"LOGIN"}
                    color="grey"
                    isLoading = {this.state.isLoading}
                />
            </View>
        )
    }
}