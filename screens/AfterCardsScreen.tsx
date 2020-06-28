import React from 'react';
import { Text, Image, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import i18n from '../i18n';

import { Button } from '../components/common';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

import * as ActionTypes from '../actions/types';
import styles from './styles';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/AppNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type AfterCardsScreenRouteProp = RouteProp<RootStackParamList, 'AfterCards'>;
type AfterCardsScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'AfterCards'
>;

type Props = {
  route: AfterCardsScreenRouteProp;
  navigation: AfterCardsScreenNavigationProp;
};

function AfterCardsScreen({ route, navigation }: Props) {
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
          {i18n.t(selectedRedCard)}
        </Text>,
        ', ',
        <Text key={selectedOrangeCard} style={{ color: '#F7941C' }}>
          {i18n.t(selectedOrangeCard)}
        </Text>,
        ', ',
      ];

      render.push(...renderTmp);
    }

    render.push(
      <Text key={selectedGreenCard} style={{ color: '#39B549' }}>
        {i18n.t(selectedGreenCard)}
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
            {i18n.t('youHaveChosen')} {renderChosenCardsText()}
            {i18n.t('placeYourself')}
          </Text>
          <View style={styles.nextButtonContainer}>
            <Button
              onPress={() => {
                if (currentDeck !== 'green') {
                  navigation.navigate('Deck', route.params);
                  return;
                }
                navigation.navigate('Video');
              }}>
              {i18n.t('letsGo')}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AfterCardsScreen;
