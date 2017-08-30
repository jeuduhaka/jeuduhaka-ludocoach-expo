import React from 'react';
import VideosListScreen from './VideosListScreen';
import rowsDataRed from '../stores/rowsDataRed';

export default class RedScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'AVOIR'
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../assets/icons/app-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <VideosListScreen navigation={this.props.navigation} rows={rowsDataRed} />
    );
  }
}
