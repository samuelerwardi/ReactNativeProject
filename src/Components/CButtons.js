import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    ActivityIndicator,
    Text,
} from 'react-native';

import Ripple from 'react-native-material-ripple';

const styles = StyleSheet.create({
    container:{
        flex:2,
        flexDirection: "column",

    }
})

export default class CButtons extends React.Component{
    componentDidMount(){
        // console.log(this.props);
    }
    render(){
        // {} kurawal pertaman menandakan JS, kurawal ke2 mendakan object JS
        return(
            <Ripple style={{flex:1,flexDirection:"column"}}>
                <View style={{
                    ...styles.container,
                    ...this.props.styleContainer
                }}>
                {
                    this.props.isLoading ?
                    <ActivityIndicator/> :
                    <Button 
                        title={this.props.title}
                        color={this.props.color}
                        onPress={() => {this.props.onPress()}} 
                    />
                }
                </View>
            </Ripple>
        )
    }
}