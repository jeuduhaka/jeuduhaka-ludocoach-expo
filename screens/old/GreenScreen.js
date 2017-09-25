import React from '/utilities/enhancedReact';
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
          3.ÊTRE
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
        currentDeck={'green'}
        style={{
          screenBackground: {
            backgroundColor: '#006900'
          }
        }}
      />
    );
  }
}
