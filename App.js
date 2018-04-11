/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import Firstpage from './view/Firstpage'
import Secondpage from './view/Secondpage'

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


const Navigator = StackNavigator(  
    
  {  
    First: {
      screen: Firstpage,
      navigationOptions:{
        title:'Firstpage'
      }
    },
    Second:{
      screen: Secondpage,
      navigationOptions:{
        title:'Secondpage',
        backTitle:'Back',
      }
    },

  },  
  
  {  
    navigationOptions:{  
      initialRouteName:'First',
      headerBackTitle:null,  
      headerTintColor:'#333333',  
      showIcon:true,  
     swipeEnabled:false,  
     animationEnabled:false,  
    },  
  
    mode:'card',  
  });  


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#0000ff',
    marginBottom: 5,
  },
});
