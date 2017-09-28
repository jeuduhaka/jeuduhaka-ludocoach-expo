import React from '/utils/enhancedReact';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Asset } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import flat from 'flat';

import I18n from '../i18n';

import { gameModeChosen, languageChanged } from '../actions';
import * as ActionTypes from '../actions/types';

import { Button } from '../components/common';
import MenuButton from '../components/MenuButton';
import LanguageFlagButton from '../components/LanguageFlagButton';
import styles from './styles';
import cardImageSources from '../stores/CardImageSources';
import cardVideoSources from '../stores/CardVideoSourcesLocal';

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

  state = {
    assetsLoaded: false,
    assetsNumber: null,
    currentAssetIndex: 0,
  };

  componentDidMount() {
    try {
      this._loadAssetsAsync();
      // this._getLanguage();
    } finally {
      // this.setState({ appIsReady: true });
    }
  }

  async _loadAssetsAsync() {
    const images = Object.values(flat(cardImageSources));
    const videos = Object.values(flat(cardVideoSources));

    const assets = images.concat(videos);
    this.setState({ assetsNumber: assets.length });

    for (let asset of assets) {
      asset = Asset.fromModule(asset);
      // this.setState({ currentAsset: `${asset.name}.${asset.type}` });
      this.setState({ currentAssetIndex: this.state.currentAssetIndex + 1 });
      await asset.downloadAsync();
    }

    this.setState({ assetsLoaded: true });
  }

  async componentWillMount() {
    if (this.props.language) {
      I18n.locale = this.props.language;
      return;
    }

    await I18n.initAsync();
    this.props.languageChanged(I18n.locale);
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
            {this.state.assetsLoaded ? (
              <View>
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
            ) : (
              this.state.assetsNumber &&
              this.state.currentAssetIndex && (
                <Text
                  style={{
                    color: '#000000',
                    alignSelf: 'center',
                  }}>
                  chargement... {this.state.currentAssetIndex}/{this.state.assetsNumber}
                </Text>
              )
            )}
          </View>
          <View style={styles.copyrightContainer}>
            <Text style={styles.copyright}>
              Hinenao Kimitete - Tehotu Tauraatua
            </Text>
            <Text style={styles.copyright}>Marc Kucharz</Text>
            <Text style={[styles.copyright, { marginTop: 10 }]}>
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
  connect(mapStateToProps, { gameModeChosen, languageChanged })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(HomeScreen);
