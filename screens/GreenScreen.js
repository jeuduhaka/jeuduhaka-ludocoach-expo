import React from 'react';
import { Image, Button } from 'react-native';
import styles from './screens.style';

export default class GreenScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'ÊTRE',
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
      <Button
        onPress={() => this.props.navigation.navigate('Red')}
        title="Go to Red screen"
      />
    );
  }
}
