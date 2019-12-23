import React, { Component } from "react";
import { 
    View, 
    Text, 
    ScrollView, 
    StyleSheet,
    KeyboardAvoidingView,
    ToastAndroid } from "react-native";
    
import colors from "../../Styles/Color";
import InputField from "../../Components/InputField";
import NextArrowButton from "../../Components/NextArrowButton";
import axios from 'axios';
import config from '../../Config/Config';

const JSON5 = require("json5");
export default class ExampleScreen extends Component {
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
      header: null,
  };
  componentDidMount() {

  }
  _handlerSubmit = (props) => {
    console.log(props);
    axios.post(`${config.baseUrl}`, {
        transformResponse: [
        ]
    })
    .then(function (response) {
      console.log("start");
      if(JSON5.parse(response.data)[0].access_token){
        ToastAndroid.show(JSON5.parse(response.data)[0].access_token, ToastAndroid.LONG);
        props.navigation.navigate("Home"); 
      }
    })
    .catch(function (error) {
    });
  }
  
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior="padding"
      >
          <View style={styles.scrollViewWrapper}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.loginHeader}>Login</Text>
              <InputField 
                labelText="EMAIL ADDRESS" 
                labelTextSize={14} 
                labelColor={colors.white} 
                textColor={colors.white} 
                borderBottomColor={colors.white} 
                inputType="email" 
                customStyle={{marginBottom:30}} />

              <InputField 
                labelText="PASSWORD" 
                labelTextSize={14} 
                labelColor={colors.white} 
                textColor={colors.white} 
                borderBottomColor={colors.white} 
                inputType="password"  
                customStyle={{marginBottom:30}} />
            </ScrollView>
            <NextArrowButton 
              onPress={() =>{
                this._handlerSubmit(this.props)
              }}
            />
          </View>
       </KeyboardAvoidingView>
    );
  }
}
let headingTextSize = 30;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    padding: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: headingTextSize,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
