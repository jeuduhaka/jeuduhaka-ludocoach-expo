import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  ImageBackground,
  Linking,
  View,
  Platform,
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import flat from 'flat';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import i18n from '../i18n';

import { Button } from '../components/common';
import MenuButton from '../components/MenuButton';
import LanguageFlagButton from '../components/LanguageFlagButton';
import styles from './styles';
import cardImageSources from '../stores/CardImageSources';
import cardVideoSources from '../stores/CardVideoSourcesLocal';
import { RootStackParamList } from '../navigators/AppNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({ route, navigation }: Props) {
  // static navigationOptions = ({ navigation, screenProps }) => {
  //   return {
  //     headerMode: 'float',
  //     drawerLabel: i18n.t('backToGame', { locale: screenProps.language }),
  //     drawerIcon: ({ tintColor }) => {
  //       const iconName =
  //         Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';

  //       return (
  //         <Ionicons name={iconName} size={18} style={{ color: '#014DA2' }} />
  //       );
  //     },
  //   };
  // };

  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [assetsCount, setAssetsCount] = useState(0);
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  const loadAssetsAsync = async () => {
    if (assetsLoaded) {
      return;
    }

    const images = Object.values<number>(flat(cardImageSources));
    const videos = Object.values<number>(flat(cardVideoSources));

    const assetsRequires = images.concat(videos);
    setAssetsCount(assetsRequires.length);

    for (let assetRequire of assetsRequires) {
      const asset = Asset.fromModule(assetRequire);
      setCurrentAssetIndex(currentAssetIndex + 1);
      await asset.downloadAsync();
    }

    setAssetsLoaded(true);
  };

  useEffect(() => {
    try {
      loadAssetsAsync();
      // this._getLanguage();
    } finally {
      // this.setState({ appIsReady: true });
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
        <View style={styles.navigationHeader}>
          <MenuButton
            onPress={() => {
              navigation.openDrawer();
            }}
          />
          <LanguageFlagButton />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{i18n.t('hakaGame')}</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{i18n.t('guidedByLudocoach')}</Text>
          </View>
          <View style={styles.homeImageContainer}>
            <Image
              style={styles.homeImage}
              source={require('../assets/images/jeu-du-haka-logo-200x200.png')}
            />
          </View>
          <View style={styles.mantraContainer}>
            <Text style={styles.subtitle}>{i18n.t('powerIsInYou')}</Text>
          </View>
          <View style={styles.startButtonContainer}>
            {assetsLoaded ? (
              <View>
                <View style={styles.homeActionButton}>
                  <Button
                    onPress={() => {
                      navigation.navigate('Second3Moves');
                    }}>
                    {i18n.t('play3Moves')}
                  </Button>
                </View>
                <View style={styles.homeActionButton}>
                  <Button
                    onPress={() => {
                      navigation.navigate('Second1Move');
                    }}>
                    {i18n.t('play1Move')}
                  </Button>
                </View>
              </View>
            ) : (
              assetsCount &&
              currentAssetIndex && (
                <Text
                  style={{
                    color: '#000000',
                    alignSelf: 'center',
                  }}>
                  <Text>{i18n.t('loading')}</Text>
                  <Text>... </Text>
                  <Text>{`${currentAssetIndex}/${assetsCount}`}</Text>
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
              © Le Jeu du Haka - {i18n.t('allRightsReserved')}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export { HomeScreen };
