import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import i18n from '../i18n';

import DecksContainer from '../components/DecksContainer';
import Card from '../components/Card';
import ChooseCardText from '../components/ChooseCardText';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

import cardImageSources from '../stores/CardImageSources';
import * as ActionTypes from '../actions/types';
import { RootStackParamList } from '../navigators/AppNavigator';
import { CardName, AssetsSources } from '../types';

type ChooseCardGridScreenRouteProp = RouteProp<
  RootStackParamList,
  'ChooseCardGrid'
>;

type ChooseCardGridScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChooseCardGrid'
>;

type Props = {
  route: ChooseCardGridScreenRouteProp;
  navigation: ChooseCardGridScreenNavigationProp;
};

function ChooseCardGridScreen({ route, navigation }: Props) {
  const { currentDeck, gameMode } = route.params;

  const displayCardRows = () => {
    // TODO specify any
    let currentDeckImageSources = cardImageSources.front[currentDeck];

    currentDeckImageSources = Object.keys(currentDeckImageSources)
      .sort((nameA, nameB) => {
        if (nameA.includes('joker')) return 1;
        if (nameB.includes('joker')) return -1;

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
      // TODO specify any
      .reduce(function (result: { [key in CardName]: number }, key: CardName) {
        result[key] = currentDeckImageSources[key];
        return result;
      }, {});

    const currentImageSources = Object.entries(currentDeckImageSources);
    const rows = [];

    const cards = currentImageSources.map(([cardName, imageSource]) => {
      return (
        <Card
          key={cardName}
          name={i18n.t(cardName)}
          imageSource={imageSource}
          onPress={() => {
            if (gameMode === ActionTypes.GAME_MODE_1_MOVE) {
              navigation.navigate('Video', {
                gameMode,
                currentDeck,
                selectedCards: {
                  ...route.params.selectedCards,
                  [currentDeck]: cardName,
                },
                allCardsChosen: true,
              });
              return;
            }

            navigation.navigate('ConfirmCard', {
              gameMode,
              currentDeck,
              cardName,
              selectedCards: {
                ...route.params.selectedCards,
                [currentDeck]: cardName,
              },
              allCardsChosen: route.params.allCardsChosen,
            });
          }}
        />
      );
    });

    const NB_CARDS_PER_ROW = 3;

    for (let i = 0; i < NB_CARDS_PER_ROW; ++i) {
      rows.push(
        <DecksContainer key={i} style={styles.rowStyle}>
          {cards.slice(
            i * NB_CARDS_PER_ROW,
            i * NB_CARDS_PER_ROW + NB_CARDS_PER_ROW
          )}
        </DecksContainer>
      );
    }

    return <View style={{ flex: 9 }}>{rows}</View>;
  };

  const { containerStyle, textStyle, rowStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={{ flex: 1 / 10 }}>
        <BackButton tintColor={'#ffffff'} />
        <HomeButton tintColor={'#ffffff'} />
        <ChooseCardText currentDeck={currentDeck} />
      </View>
      <View style={{ flex: 9 / 10 }}>{displayCardRows()}</View>
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
    // paddingTop: 30,
  },
  textStyle: {
    color: '#FFF',
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#00ff00'
  },
});

export { ChooseCardGridScreen };
