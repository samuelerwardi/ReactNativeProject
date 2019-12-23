import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        // flex:2,
        flexDirection: "column",

    }
})

export default class CTextInput extends React.Component{
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        // {} kurawal pertaman menandakan JS, kurawal ke2 mendakan object JS
        return(
            <View style={{
                ...styles.container,
                ...this.props.styleContainer
            }}>
                <TextInput 
                    {...this.props}
                    placeholder={this.props.TextInputPlaceholder}
                    title={this.props.title}
                    secureTextEntry={this.props.isSecureText}
                    onChangeText={(val) => {
                        this.props.onChangeText(val)
                    }}
                />
            </View>
        )
    }
}