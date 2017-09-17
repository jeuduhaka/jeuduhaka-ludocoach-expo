import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { gameModeChosen } from '../actions';
import * as ActionTypes from '../actions/types';

import { Button } from '../components/common';
import styles from './styles';

class FirstScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Le Jeu du Haka</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>guidé par le ludocoach Tehotu</Text>
          </View>
          <View style={styles.homeImageContainer}>
            <Image
              style={styles.homeImage}
              source={require('../assets/images/jeu-du-haka-logo-200x200.png')}
            />
          </View>
          <View style={styles.startButtonContainer}>
            <Button
              title={'Jouer en 3 mouvements'}
              // onPress={() => this.props.navigation.navigate('Second3Moves')}
              onPress={() =>
                this.props.gameModeChosen(ActionTypes.GAME_MODE_3_MOVES)}
            >
              Jouer en 3 mouvements
            </Button>
          </View>
          <View style={styles.startButtonContainer}>
            <Button
              title={'Jouer en 1 mouvement'}
              // onPress={() => this.props.navigation.navigate('ChooseCardGrid')}
              onPress={() =>
                this.props.gameModeChosen(ActionTypes.GAME_MODE_1_MOVE)}
            >
              Jouer en 1 mouvement
            </Button>
          </View>
          <View style={styles.websites} />
          <Text
            style={styles.websiteLink}
            title={'www.jeuduhaka.com'}
            onPress={() => Linking.openURL('https://www.jeuduhaka.com')}
          >
            www.jeuduhaka.com
          </Text>
          <Text
            style={styles.websiteLink}
            title={'www.marckucharz.com'}
            onPress={() => Linking.openURL('http://www.marckucharz.com')}
          >
            www.marckucharz.com
          </Text>
          <Text
            style={styles.websiteLink}
            title={'www.ludocoaching.com'}
            onPress={() => Linking.openURL('http://www.ludocoaching.com')}
          >
            www.ludocoaching.com
          </Text>
          <View style={styles.copyrightContainer}>
            <Text style={styles.copyright}>
              © Le Jeu du Haka - Tous droits réservés
            </Text>
          </View>
        </Image>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  gameMode: state.gameMode
});

const enhance = compose(
  connect(mapStateToProps, { gameModeChosen })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(FirstScreen);
