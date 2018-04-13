/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import NetUtil from '../utils/NetUtil';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

export default class HomeTabpage extends Component {

  static navigationOptions = ({ navigation }) =>({
    title:'我的',
    tabBarLabel: '首页22',
    tabBarIcon: ({tintColor}) => (<Image source={require('./image/icon_home.png')} style={[{tintColor: tintColor},styles.icon]}/>),
  })

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
    };
  }

  //组件渲染完毕后再请求数据，防止报错
  componentDidMount(){
    NetUtil.get('https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=&udid='
      ,this.onLoadNetDataFinish.bind(this));
  }

  //使用console.log打印的信息可以在终端使用命令“adb logcat *:S ReactNative:V ReactNativeJS:V”查看
  onLoadNetDataFinish(data){
    this.setState({
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(data.subjects),
    });
  }

  //渲染item，相当于adapter的getview方法
  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void){
    return (
      <View style={styles.item} key={`{sectionID}-${rowID}`}>
        <Image source={{uri: (typeof(rowData.images)!="undefined"&&rowData.images!=null) ?rowData.images.large:''}} style={{marginRight:10,width: 200, height: 200}} />
        <Text>{rowData.title}</Text>

      </View>);
  }

  //渲染分割线
  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View key={`{sectionID}-${rowID}`}
        style={{height: 1, backgroundColor: 'black'}}>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSeparator={this._renderSeparator}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    justifyContent: 'flex-start',
    flexDirection:'row',
    backgroundColor: '#F5FCFF',
    padding:10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  icon: {
        width: 26,
        height: 26,
    },
  
});
