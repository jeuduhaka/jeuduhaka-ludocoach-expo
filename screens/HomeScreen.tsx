import React, { useState, useEffect } from 'react';
import { Text, Image, ImageBackground, View } from 'react-native';
import { Asset } from 'expo-asset';
import flat from 'flat';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Button } from '../components/common';
import MenuButton from '../components/MenuButton';
import { LanguageFlagPicker } from '../components/LanguageFlagPicker';
import styles from './styles';
import cardImageSources from '../stores/CardImageSources';
import cardVideoSources from '../stores/CardVideoSourcesLocal';
import { RootStackParamList } from '../navigators/AppNavigator';
import { useTranslation } from 'react-i18next';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
> &
  DrawerNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: Props) {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [currentAssetIndex, setCurrentAssetIndex] = useState(1);
  const [assetsRequires] = useState([
    ...Object.values<number>(flat(cardImageSources)),
    ...Object.values<number>(flat(cardVideoSources)),
  ]);
  const [assetsCount] = useState(assetsRequires.length);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      if (assetsLoaded) {
        return;
      }

      if (currentAssetIndex === assetsCount) {
        setAssetsLoaded(true);
        return;
      }

      const asset = Asset.fromModule(assetsRequires.pop());
      await asset.downloadAsync();
      setCurrentAssetIndex(currentAssetIndex + 1);
    })();
  }, [
    assetsLoaded,
    currentAssetIndex,
    assetsCount,
    assetsRequires,
    setCurrentAssetIndex,
  ]);

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
          <LanguageFlagPicker />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{t('hakaGame')}</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{t('guidedByLudocoach')}</Text>
          </View>
          <View style={styles.homeImageContainer}>
            <Image
              style={styles.homeImage}
              source={require('../assets/images/jeu-du-haka-logo-200x200.png')}
            />
          </View>
          <View style={styles.mantraContainer}>
            <Text style={styles.subtitle}>{t('powerIsInYou')}</Text>
          </View>
          <View style={styles.startButtonContainer}>
            {assetsLoaded ? (
              <View>
                <View style={styles.homeActionButton}>
                  <Button
                    onPress={() => {
                      navigation.push('SecondScreen3Moves', {});
                    }}>
                    {t('play3Moves')}
                  </Button>
                </View>
                <View style={styles.homeActionButton}>
                  <Button
                    onPress={() => {
                      navigation.push('SecondScreen1Move', {});
                    }}>
                    {t('play1Move')}
                  </Button>
                </View>
              </View>
            ) : (
              <Text
                style={{
                  color: '#000000',
                  alignSelf: 'center',
                }}>
                <Text>{t('loading')}</Text>
                <Text>... </Text>
                <Text>{`${currentAssetIndex}/${assetsCount}`}</Text>
              </Text>
            )}
          </View>
          <View style={styles.copyrightContainer}>
            <Text style={styles.copyright}>
              Hinenao Kimitete - Tehotu Tauraatua
            </Text>
            <Text style={styles.copyright}>Marc Kucharz</Text>
            <Text style={[styles.copyright, { paddingTop: 10 }]}>
              © Le Jeu du Haka - {t('allRightsReserved')}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export { HomeScreen };
