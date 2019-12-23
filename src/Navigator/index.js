 
import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import ExampleScreen from '../Screens/ExampleScreen';
import Example2Screen from '../Screens/Example2Screen';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Login: {
            screen: LoginScreen,
        },
        Example: {
            screen: ExampleScreen,
        },
        Example2: {
            screen: Example2Screen,
        },
    },
    {
        initialRouteName: "Example",
    }
);

const Navigator = createAppContainer(AppNavigator);
console.log(navigator);
export default Navigator;