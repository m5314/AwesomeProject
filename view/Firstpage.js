/**
 * 展示TabNavigator的用法
 */

import React, { Component } from 'react';
import {TabNavigator} from 'react-navigation'
import HomeTabpage from './HomeTabpage'
import MovieTabpage from './MovieTabpage'
import MeTabpage from './MeTabpage'
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
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
                tabBarLabel: '首页',
                tabBarIcon: ({tintColor}) => (<Image source={require('./image/icon_home.png')} style={[{tintColor: tintColor},styles.icon]}/>),
        }
    },
    Movie: {
        screen: MovieTabpage,
        navigationOptions: {
                tabBarLabel: '电影',
               tabBarIcon: ({tintColor}) => (<Image source={require('./image/icon_home.png')} style={[{tintColor: tintColor},styles.icon]}/>),
        }
    },
    Me: {
        screen: MeTabpage,
        navigationOptions: {
                tabBarLabel: '我',
                tabBarIcon: ({tintColor}) => (<Image source={require('./image/icon_home.png')} style={[{tintColor: tintColor},styles.icon]}/>),
        }
    }
  }, {
      animationEnabled: true, // 切换页面时是否有动画效果
      tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
      swipeEnabled: false, // 是否可以左右滑动切换tab
      backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
      tabBarOptions: {
          activeTintColor: '#ff8500', // 文字和图片选中颜色
          inactiveTintColor: '#999', // 文字和图片未选中颜色
          showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
          indicatorStyle: {
              height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
          }, 
          style: {
              backgroundColor: '#fff', // TabBar 背景色
              // height: 44
          },
          labelStyle: {
              fontSize: 10, // 文字大小
          },
      },
});

export default class Firstpage extends Component {
  render() {
    return (
      <Tabs />
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
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
        width: 26,
        height: 26,
    },
});
