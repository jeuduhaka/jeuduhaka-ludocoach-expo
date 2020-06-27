import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  TextStyle,
  ImageBackground,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import i18n from '../i18n';
import { Button } from '../components/common';
import { useNavigation, RouteProp } from '@react-navigation/native';

import styles2 from './styles';
import { RootStackParamList } from '../navigators/AppNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type GiftCardsScreenRouteProp = RouteProp<RootStackParamList, 'GiftCards'>;
type GiftCardsScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'GiftCards'
>;

type Props = {
  route: GiftCardsScreenRouteProp;
  navigation: GiftCardsScreenNavigationProp;
};

function GiftCardsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles2.backgroundImage}
        source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
        <View style={styles2.navigationHeader}>
          <MenuButton
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </View>
        <View
          style={[
            styles2.contentContainer,
            { justifyContent: 'center', alignItems: 'center' },
          ]}>
          <View
            style={{
              flex: 3 / 10,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={[
                styles.blackText,
                {
                  // paddingBottom: 20,
                  fontWeight: 'bold',
                  fontSize: 20,
                  backgroundColor: 'transparent',
                },
              ]}>
              {i18n.t('sendGiftCard')}
            </Text>
          </View>
          <View style={{ flex: 7 / 10 }}>
            <View style={{ flex: 7 / 10 }}>
              <Text
                style={[
                  styles.blackText,
                  styles.textWithPaddingTop,
                  { backgroundColor: 'transparent' },
                ]}>
                {i18n.t('sendGiftCardTextPart1')}
              </Text>
              <Text
                style={[
                  styles.blackText,
                  styles.textWithPaddingTop,
                  { backgroundColor: 'transparent' },
                ]}>
                {i18n.t('sendGiftCardTextPart2')}
              </Text>
            </View>
            <View style={{ flex: 3 / 10 }}>
              <Button
                // TODO add better screen transition
                onPress={() => navigation.navigate('SendGiftCardGallery')}>
                {i18n.t('chooseGiftCard')}
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const textfontSize: TextStyle = {
  fontSize: 16,
  textAlign: 'center',
};
const styles = StyleSheet.create({
  blueText: {
    ...textfontSize,
    color: '#014DA2',
  },
  blackText: {
    ...textfontSize,
    color: '#221E1F',
  },
  textWithPaddingTop: {
    paddingTop: 10,
  },
  manaText: {
    color: '#014DA2',
    fontFamily: 'charcuterie-sans-inline',
  },
  stepNumber: {
    // fontFamily: 'european-pi-one',
  },
  stepText: {
    fontWeight: 'bold',
  },
});

export default GiftCardsScreen;
