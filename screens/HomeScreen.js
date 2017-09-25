import React from '/utilities/enhancedReact';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import I18n from '../i18n';

import { gameModeChosen } from '../actions';
import * as ActionTypes from '../actions/types';

import { Button } from '../components/common';
import MenuButton from '../components/MenuButton';
import LanguageFlagButton from '../components/LanguageFlagButton';
import styles from './styles';

class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  // static navigationOptions = {
  //   headerMode: 'float',
  //   drawerLabel: I18n.t('backToGame'),
  //   drawerIcon: ({ tintColor }) => (
  //     <FontAwesome name="gamepad" size={18} style={{ color: '#014DA2' }} />
  //   )
  // };

  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      headerMode: 'float',
      drawerLabel: I18n.t('backToGame', { locale: screenProps.language }),
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="gamepad" size={18} style={{ color: '#014DA2' }} />
      ),
    };
  };

  shouldComponentUpdate(nextProps) {
    //fix issue when backHome
    return nextProps.children !== this.props.children;
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuButton
          onPress={() => {
            this.props.navigation.navigate('DrawerOpen');
          }}
        />
        <LanguageFlagButton />
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{I18n.t('hakaGame')}</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{I18n.t('guidedByLudocoach')}</Text>
          </View>
          <View style={styles.homeImageContainer}>
            <Image
              style={styles.homeImage}
              source={require('../assets/images/jeu-du-haka-logo-200x200.png')}
            />
          </View>
          <View style={[styles.startButtonContainer, { flex: 3 }]}>
            <Button
              title={I18n.t('play3Moves')}
              // onPress={() => this.props.navigation.navigate('Second3Moves')}
              onPress={() =>
                this.props.gameModeChosen(ActionTypes.GAME_MODE_3_MOVES)}>
              {I18n.t('play3Moves')}
            </Button>
            <Button
              title={I18n.t('play1Move')}
              // onPress={() => this.props.navigation.navigate('ChooseCardGrid')}
              onPress={() =>
                this.props.gameModeChosen(ActionTypes.GAME_MODE_1_MOVE)}>
              {I18n.t('play1Move')}
            </Button>
            <Button
              title={I18n.t('accessTraining')}
              // onPress={() => this.props.navigation.navigate('ChooseCardGrid')}
              onPress={() => Linking.openURL('http://bit.ly/2jvNoUj')}>
              {I18n.t('accessTraining')}
            </Button>
          </View>
          <View style={styles.copyrightContainer}>
            <Text style={styles.copyright}>
              © Le Jeu du Haka - {I18n.t('allRightsReserved')}
            </Text>
          </View>
        </Image>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  gameMode: state.gameMode,
  language: state.language,
});

const enhance = compose(
  connect(mapStateToProps, { gameModeChosen })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(HomeScreen);
