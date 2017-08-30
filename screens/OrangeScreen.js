import React from 'react';
import { Image, Button } from 'react-native';
import styles from './screens.style';

export default class OrangeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'FAIRE',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../assets/icons/app-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  state = {
    rows: [
      'Abandon',
      'Colère',
      'Dégoût',
      'Doute',
      'Menace',
      'Peur',
      'Joker'
    ]
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Green')}
        title="Go to Green screen"
      />
    );
  }
}
