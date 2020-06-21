import React from 'react';
import { View, StyleSheet } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import i18n from '../i18n';

import DecksContainer from '../components/DecksContainer';
import Card from '../components/Card';
import ChooseCardText from '../components/ChooseCardText';
import { cardPressed } from '../actions';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

import cardImageSources from '../stores/CardImageSources';
import * as ActionTypes from '../actions/types';
import { useNavigation } from '@react-navigation/native';

class ChooseCardGridScreen extends React.Component<{
  currentDeck: 'red' | 'orange' | 'green';
  cardPressed: (
    cardName: string,
    gameMode: string
  ) => {
    type: string;
    cardName: string;
    gameMode: string;
  };
  gameMode: string;
}> {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  // TODO specify any
  shouldComponentUpdate(nextProps: any) {
    //fix issue when backHome
    return nextProps.currentDeck !== '';
  }

  displayCardRows() {
    const { currentDeck, cardPressed, gameMode } = this.props;

    let currentDeckImageSources:
      | {
          abandonment: any;
          anger: any;
          disgust: any;
          doubt: any;
          threat: any;
          fear: any;
          sadness: any;
          violence: any;
          'joker-red': any;
        }
      | {
          action: any;
          courage: any;
          movement: any;
          patience: any;
          preparation: any;
          prevention: any;
          protection: any;
          unity: any;
          'joker-orange': any;
        } = cardImageSources.front[currentDeck];

    currentDeckImageSources = Object.keys(currentDeckImageSources)
      .sort((nameA, nameB) => {
        // console.log(`nameA: ${nameA} | nameB: ${nameB}`);

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
      .reduce(function (result: { [key: string]: any }, key) {
        result[key] = currentDeckImageSources[key];
        return result;
      }, {});

    const currentImageSources = Object.entries(currentDeckImageSources);

    const rows = [];
    const navigation = useNavigation();

    const cards = currentImageSources.map(([cardName, imageSource]) => {
      return (
        <Card
          key={cardName}
          name={i18n.t(cardName)}
          imageSource={imageSource}
          onPress={() => {
            cardPressed(cardName, gameMode);

            if (gameMode === ActionTypes.GAME_MODE_1_MOVE) {
              navigation.navigate('Video');
              return;
            }

            navigation.navigate('ConfirmCard');
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
  }

  render() {
    const { containerStyle, textStyle, rowStyle } = styles;

    return (
      <View style={containerStyle}>
        <View style={{ flex: 1 / 10 }}>
          <BackButton tintColor={'#ffffff'} />
          <HomeButton tintColor={'#ffffff'} />
          <ChooseCardText currentDeck={this.props.currentDeck} />
        </View>
        <View style={{ flex: 9 / 10 }}>{this.displayCardRows()}</View>
      </View>
    );
  }
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

// TODO specify any
const mapStateToProps = (state: any) => ({
  gameMode: state.gameMode,
  currentDeck: state.cards.present.currentDeck,
  allCardsChosen: state.cards.present.allCardsChosen,
  cardConfirmed: state.cards.present.cardConfirmed,
});

const enhance = compose(
  connect(mapStateToProps, { cardPressed })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(ChooseCardGridScreen);
