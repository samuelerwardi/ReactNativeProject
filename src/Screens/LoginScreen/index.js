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
        // console.log(this.state.loading);
        ToastAndroid.show('A pikachu appeared nearby !1', ToastAndroid.SHORT);
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