/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation'
import Firstpage from './view/Firstpage'
import Secondpage from './view/Secondpage'
import HomeTabpage from './view/HomeTabpage'
import MovieTabpage from './view/MovieTabpage'
import MeTabpage from './view/MeTabpage'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Tabs = TabNavigator({
    Home: {
        screen: HomeTabpage,
        navigationOptions:{
          title:'首页',
          tabBarLabel: '首页',
          tabBarIcon: ({tintColor}) => (<Image source={require('./view/image/icon_home.png')} style={[{tintColor: tintColor},styles.icon]}/>),
        }
      
    },
    Movie: {
        screen: MovieTabpage,
        navigationOptions: {
          title:'电影',
                tabBarLabel: '电影',
               tabBarIcon: ({tintColor}) => (<Image source={require('./view/image/icon_home.png')} style={[{tintColor: tintColor},styles.icon]}/>),
        }
    },
    Me: {
        screen: MeTabpage,
        navigationOptions: {
          title:'我',
                tabBarLabel: '我',
                tabBarIcon: ({tintColor}) => (<Image source={require('./view/image/icon_home.png')} style={[{tintColor: tintColor},styles.icon]}/>),
        }
    }
  }, {
      animationEnabled: true, // 切换页面时是否有动画效果
      tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
      swipeEnabled: true, // 是否可以左右滑动切换tab
      backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
      tabBarOptions: {
          activeTintColor: '#ff0000', // 文字和图片选中颜色
          inactiveTintColor: '#999', // 文字和图片未选中颜色
          showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
          indicatorStyle: {
              height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
          }, 
          style: {
              backgroundColor: '#ebebeb', // TabBar 背景色
              // height: 44
          },
          labelStyle: {
              fontSize: 10, // 文字大小
          },
      },
});


const Navigator = StackNavigator(  
    
  {  
    First: {
      screen: Tabs,
    },
    Second:{
      screen: Secondpage,
    
    },

  });  

type Props = {};
export default class App extends Component<Props> {

  static navigationOptions={
        title: '首页',//设置标题内容
        header:{
            backTitle: ' ',//返回按钮标题内容（默认为上一级标题内容）
        }
    }

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
  icon: {
        width: 26,
        height: 26,
    },
});
