import React from 'react';
import { Text, Image, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../navigators/AppNavigator';

import { Button } from '../components/common';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

import * as ActionTypes from '../actions/types';
import styles from './styles';
import { useTranslation } from 'react-i18next';

type AfterCardsScreenRouteProp = RouteProp<RootStackParamList, 'AfterCards'>;
type AfterCardsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AfterCards'
>;

type Props = {
  route: AfterCardsScreenRouteProp;
  navigation: AfterCardsScreenNavigationProp;
};

function AfterCardsScreen({ route, navigation }: Props) {
  const { t } = useTranslation();
  const {
    gameMode,
    currentDeck,
    selectedCards: {
      red: selectedRedCard,
      orange: selectedOrangeCard,
      green: selectedGreenCard,
    },
  } = route.params;

  function renderChosenCardsText() {
    const render = [];

    if (gameMode === ActionTypes.GAME_MODE_3_MOVES) {
      const renderTmp = [
        <Text key={selectedRedCard} style={{ color: '#B8282E' }}>
          {t(selectedRedCard)}
        </Text>,
        ', ',
        <Text key={selectedOrangeCard} style={{ color: '#F7941C' }}>
          {t(selectedOrangeCard)}
        </Text>,
        ', ',
      ];

      render.push(...renderTmp);
    }

    render.push(
      <Text key={selectedGreenCard} style={{ color: '#39B549' }}>
        {t(selectedGreenCard)}
      </Text>
    );

    return render;
  }

  return (
    <View style={styles.container}>
      <BackButton tintColor={'#014DA2'} />
      <HomeButton tintColor={'#014DA2'} />
      <Image
        style={styles.backgroundOpacity}
        source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
      />
      <View style={styles.navigationHeader} />
      <View style={styles.contentContainer}>
        <View style={[styles.intermediateScreenTextContainer]}>
          <Text style={[styles.subtitle]}>
            {t('youHaveChosen')} {renderChosenCardsText()}
            {t('placeYourself')}
          </Text>
          <View style={styles.nextButtonContainer}>
            <Button
              onPress={() => {
                if (currentDeck !== 'green') {
                  navigation.push('Deck', route.params);
                  return;
                }
                navigation.push('Video');
              }}>
              {t('letsGo')}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AfterCardsScreen;
