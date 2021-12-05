import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import _get from 'lodash.get';

import Layout from '../constants/Layout';

import { Button } from '../components/common';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';
import ChooseCardText from '../components/ChooseCardText';

import cardImageSources from '../stores/CardImageSources';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/AppNavigator';
import { nextDeck } from '../actions';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

type ConfirmCardScreenRouteProp = RouteProp<RootStackParamList, 'ConfirmCard'>;
type ConfirmCardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ConfirmCard'
>;

type Props = {
  route: ConfirmCardScreenRouteProp;
  navigation: ConfirmCardScreenNavigationProp;
};

function ConfirmCardScreen({ route, navigation }: Props) {
  const { currentDeck, selectedCards } = route.params;
  const { t } = useTranslation

  const {
    containerStyle,
    imageContainerStyle,
    imageStyle,
    buttonsContainerStyle,
  } = styles;

  const cardName = selectedCards[currentDeck];
  const imagePath = `front.${currentDeck}.${cardName}`;

  return (
    <View style={containerStyle}>
      <View style={styles.navigationHeader}>
        <BackButton tintColor={'#ffffff'} />
        <HomeButton tintColor={'#ffffff'} />
        <ChooseCardText currentDeck={currentDeck} />
      </View>
      <View style={imageContainerStyle}>
        <ImageBackground
          style={imageStyle}
          source={_get(cardImageSources, imagePath)}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{t(cardName)}</Text>
          </View>
        </ImageBackground>
      </View>
      {/* <View style={descriptionContainerStyle}>
          <Text style={descriptionStyle}>
            En équilibre sur une jambe, l'autre est repliée.
            Le bras avant tente de cacher le visage.
            Le bras arrière est tendu vers l'arrière.
          </Text>
        </View> */}
      <View style={buttonsContainerStyle}>
        <Button
          onPress={() => {
            if (currentDeck !== 'green') {
              navigation.push('Deck', {
                gameMode: route.params.gameMode,
                currentDeck: nextDeck(currentDeck),
                cardName,
                selectedCards: {
                  ...route.params.selectedCards,
                  [currentDeck]: cardName,
                },
                allCardsChosen: route.params.allCardsChosen,
              });
              return;
            }
            navigation.push('AfterCards', {
              gameMode: route.params.gameMode,
              currentDeck: nextDeck(currentDeck),
              cardName,
              selectedCards: {
                ...route.params.selectedCards,
                [currentDeck]: cardName,
              },
              allCardsChosen: true,
            });
          }}
          textStyle={{
            alignSelf: 'center',
            color: '#000000',
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10,
          }}
          buttonStyle={{
            // flex: 1, //expands as much as content possibly can
            alignSelf: 'stretch',
            backgroundColor: '#ffffff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#000000',
            marginLeft: 5,
            marginRight: 5,
          }}>
          {t('iChooseThisCard')}
        </Button>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          textStyle={{
            alignSelf: 'center',
            color: '#ffffff',
            backgroundColor: '#000000',
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10,
          }}
          buttonStyle={{
            // flex: 1, //expands as much as content possibly can
            alignSelf: 'stretch',
            backgroundColor: '#000000',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ffffff',
            marginLeft: 5,
            marginRight: 5,
          }}>
          {t('chooseAnotherCard')}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#000000',
  },
  navigationHeader: { flex: 1 / 10 },
  imageContainerStyle: {
    flex: 7 / 10,
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'contain',
    // width: Layout.window.width * 0.85,
    // backgroundColor: 'orange',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    // flexDirection: 'column',
    // flexWrap: 'nowrap',
    flexGrow: 1,
    // flexShrink: 1,
    overflow: 'scroll',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(255,0,0,0.3)'
    backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: 'yellow',
    width: Layout.window.width * 0.7,
  },
  title: {
    flex: 2 / 9,
    // color: colors.black,
    color: '#ffffff',
    fontFamily: 'charcuterie-sans-inline',
    fontSize: (Layout.window.width * 0.7) / 5.5,
    letterSpacing: 0.5,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  buttonsContainerStyle: {
    flex: 2 / 10,
    paddingTop: 30,
  },
});

export default ConfirmCardScreen;
