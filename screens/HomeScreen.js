import React from '/utils/enhancedReact';
import { Text, Image, Linking, View, Platform } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Asset } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import flat from 'flat';

import I18n from '../i18n';

import { gameModeChosen, languageChanged, assetsLoaded } from '../actions';
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
      drawerIcon: ({ tintColor }) => {
        const iconName =
          Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';

        return (
          <Ionicons name={iconName} size={18} style={{ color: '#014DA2' }} />
        );
      },
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
    // console.log(this.props);
    if (this.props.areAssetsLoaded) {
      this.setState({ assetsLoaded: true });
      return;
    }

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
    this.props.assetsLoaded(true);
  }

  async componentWillMount() {
    console.log(this.props);
    if (this.props.language) {
      I18n.locale = this.props.language;
    } else {
      await I18n.initAsync();
      this.props.languageChanged(I18n.locale);
    }

    if (this.props.areAssetsLoaded) {
      this.setState({ assetsLoaded: true });
    }
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
          {/* <Image
            style={{
              flex: 1,
              resizeMode: 'cover',
              width: undefined,
              height: undefined,
            }}
            source={require('../assets/images/motif-estime-de-soi-alpha-0.1.png')}> */}
          <View style={styles.navigationHeader} />
          <View style={styles.contentContainer}>
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
            <View style={styles.mantraContainer}>
              <Text style={styles.subtitle}>{I18n.t('powerIsInYou')}</Text>
            </View>
            <View style={styles.startButtonContainer}>
              {this.state.assetsLoaded ? (
                <View>
                  <View style={styles.homeActionButton}>
                    <Button
                      title={I18n.t('play3Moves')}
                      // onPress={() => this.props.navigation.navigate('Second3Moves')}
                      onPress={() =>
                        this.props.gameModeChosen(
                          ActionTypes.GAME_MODE_3_MOVES
                        )}>
                      {I18n.t('play3Moves')}
                    </Button>
                  </View>
                  <View style={styles.homeActionButton}>
                    <Button
                      title={I18n.t('play1Move')}
                      // onPress={() => this.props.navigation.navigate('ChooseCardGrid')}
                      onPress={() =>
                        this.props.gameModeChosen(
                          ActionTypes.GAME_MODE_1_MOVE
                        )}>
                      {I18n.t('play1Move')}
                    </Button>
                  </View>
                  {/* <View style={styles.homeActionButton}>
                    <Button
                      title={I18n.t('accessTraining')}
                      // onPress={() => this.props.navigation.navigate('ChooseCardGrid')}
                      onPress={() => Linking.openURL('http://bit.ly/2jvNoUj')}>
                      {I18n.t('accessTraining')}
                    </Button>
                  </View> */}
                </View>
              ) : (
                this.state.assetsNumber &&
                this.state.currentAssetIndex && (
                  <Text
                    style={{
                      color: '#000000',
                      alignSelf: 'center',
                    }}>
                    {I18n.t('loading')}... {this.state.currentAssetIndex}/{this.state.assetsNumber}
                  </Text>
                )
              )}
            </View>
            <View style={styles.copyrightContainer}>
              <Text style={styles.copyright}>
                Hinenao Kimitete - Tehotu Tauraatua
              </Text>
              <Text style={styles.copyright}>Marc Kucharz</Text>
              <Text style={[styles.copyright, { paddingTop: 10 }]}>
                © Le Jeu du Haka - {I18n.t('allRightsReserved')}
              </Text>
            </View>
          </View>
        </Image>
        {/* </Image> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  gameMode: state.gameMode,
  language: state.language,
  areAssetsLoaded: state.assetsLoaded,
});

const enhance = compose(
  connect(mapStateToProps, { gameModeChosen, languageChanged, assetsLoaded })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(HomeScreen);
