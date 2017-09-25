import React from '/utils/enhancedReact';
import { Text } from 'react-native';
import VideoCardsScreen from './VideoCardsScreen';
import rowsDataOrange from '../stores/rowsDataOrange';

export default class OrangeScreen extends React.Component {
  static navigationOptions = {
    // tabBarLabel: 'FAIRE'
    tabBarLabel: props => {
      return (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: props.focused ? '#F7941C' : '#000'
          }}
        >
          2.FAIRE
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
        rows={rowsDataOrange}
        currentDeck={'orange'}
        style={{
          screenBackground: {
            backgroundColor: '#AB4800'
          }
        }}
      />
    );
  }
}
