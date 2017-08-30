import React from 'react';
import { Text } from 'react-native';
import VideosListScreen from './VideosListScreen';
import rowsDataRed from '../stores/rowsDataRed';

export default class RedScreen extends React.Component {
  static navigationOptions = {
    // tabBarLabel: 'AVOIR'
    tabBarLabel: props => {
      return (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: props.focused ? '#B8282E' : '#000'
          }}
        >
          AVOIR
        </Text>
      );
    }
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
        rows={rowsDataRed}
        style={{
          row: {
            backgroundColor: 'rgba(184, 40, 46, 0.1)'
          },
          rowText: {
            color: '#B8282E'
          }
        }}
      />
    );
  }
}
