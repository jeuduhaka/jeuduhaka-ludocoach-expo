import React from 'react';
import { Text } from 'react-native';
import VideoCardsScreen from './VideoCardsScreen';
import rowsDataGreen from '../stores/rowsDataGreen';

export default class OrangeScreen extends React.Component {
  static navigationOptions = {
    // tabBarLabel: 'ÊTRE'
    tabBarLabel: props => {
      return (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: props.focused ? '#39B549' : '#000'
          }}
        >
          ÊTRE
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
      <VideoCardsScreen
        navigation={this.props.navigation}
        rows={rowsDataGreen}
        style={{
          row: {
            backgroundColor: 'rgba(57, 181, 73, 0.1)'
          },
          rowText: {
            color: '#39B549'
          }
        }}
      />
    );
  }
}
