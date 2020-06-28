import React from 'react';
import { View } from 'react-native';
import _get from 'lodash.get';

import { CardDeckName } from '../types';

import CardBack from '../components/CardBack';
import DecksContainer from '../components/DecksContainer';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';
import ChooseCardText from '../components/ChooseCardText';

import cardImageSources from '../stores/CardImageSources';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type DeckScreenRouteProp = RouteProp<RootStackParamList, 'Deck'>;
type DeckScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Deck'>;

type Props = {
  route: DeckScreenRouteProp;
  navigation: DeckScreenNavigationProp;
};

function DeckScreen({ route, navigation }: Props) {
  const { currentDeck, selectedCards, allCardsChosen } = route.params;

  function displayCard(color: CardDeckName) {
    const cardProps: {
      onPress: () => void;
      style: any;
      imageSource: number;
    } = {
      onPress: () => {},
      style: {},
      imageSource: NaN,
    };

    if (currentDeck === color) {
      if (!allCardsChosen) {
        cardProps.onPress = () => {
          navigation.push('ChooseCardGrid', {
            gameMode: route.params.gameMode,
            currentDeck,
            allCardsChosen: route.params.allCardsChosen,
            selectedCards,
          });
        };
      } else {
        cardProps.onPress = () => {
          navigation.push('Video', route.params);
        };
      }

      cardProps.style = {
        imageStyle: {
          flex: 3 / 7,
          // borderWidth: 1,
          // borderColor: 'yellow',
        },
      };
    } else {
      cardProps.style = {
        imageStyle: {
          flex: 2 / 7,
          opacity: 0.5,
        },
      };
    }

    const cardName = selectedCards[color];
    let imageSource = _get(cardImageSources, `front.${color}.${cardName}`);

    if (!imageSource) {
      imageSource = _get(cardImageSources, `back.${color}`);
      cardProps.imageSource = imageSource;
      return <CardBack {...cardProps} />;
    }

    cardProps.imageSource = imageSource;
    // cardProps.name = cardName;
    return <CardBack {...cardProps} />;
  }

  const { containerStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={{ flex: 1 / 10 }}>
        <BackButton tintColor={'#ffffff'} />
        <HomeButton tintColor={'#ffffff'} />
        <ChooseCardText currentDeck={currentDeck} />
      </View>
      <View style={{ flex: 9 / 10 }}>
        <DecksContainer>
          {displayCard('red')}
          {displayCard('orange')}
          {displayCard('green')}
        </DecksContainer>
      </View>
    </View>
  );
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#000000',
  },
  textStyle: {
    color: '#FFF',
  },
};

export default DeckScreen;
