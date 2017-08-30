import React from 'react';
import VideosListScreen from './VideosListScreen';
import rowsDataGreen from '../stores/rowsDataGreen';

export default class OrangeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'ÊTRE'
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
      <VideosListScreen
        navigation={this.props.navigation}
        rows={rowsDataGreen}
      />
    );
  }
}
