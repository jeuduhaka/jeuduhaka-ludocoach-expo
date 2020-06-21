import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _get from 'lodash.get';

import { deckPressed, selectedCardPressed } from '../actions';

import Card from '../components/Card';
import CardBack from '../components/CardBack';
import DecksContainer from '../components/DecksContainer';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';
import ChooseCardText from '../components/ChooseCardText';

import cardImageSources from '../stores/CardImageSources';

class DeckScreen extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.cardConfirmed && !nextProps.allVideosEnded;
  // }

  displayCard(color) {
    const cardProps = {};

    const {
      currentDeck,
      allCardsChosen,
      deckPressed,
      selectedCards,
      selectedCardPressed,
      navigation,
    } = this.props;

    console.log(currentDeck);
    if (currentDeck === color) {
      if (!allCardsChosen) {
        cardProps.onPress = () => {
          deckPressed(color);
          navigation.navigate('ChooseCardGrid');
        };
      } else {
        cardProps.onPress = () => {
          selectedCardPressed();
          navigation.navigate('Video');
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

  render() {
    const { containerStyle, textStyle } = styles;
    const { navigation } = this.props;

    return (
      <View style={containerStyle}>
        <View style={{ flex: 1 / 10 }}>
          <BackButton navigation={navigation} tintColor={'#ffffff'} />
          <HomeButton navigation={navigation} tintColor={'#ffffff'} />
          <ChooseCardText currentDeck={this.props.currentDeck} />
        </View>
        <View style={{ flex: 9 / 10 }}>
          <DecksContainer>
            {this.displayCard('red')}
            {this.displayCard('orange')}
            {this.displayCard('green')}
          </DecksContainer>
        </View>
      </View>
    );
  }
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

const mapStateToProps = (state) => ({
  currentDeck: state.cards.present.currentDeck,
  cardConfirmed: state.cards.present.cardConfirmed,
  selectedCards: state.cards.present.selected,
  allCardsChosen: state.cards.present.allCardsChosen,
  allVideosEnded: state.cards.present.allVideosEnded,
});

const enhance = compose(
  connect(mapStateToProps, { deckPressed, selectedCardPressed })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(DeckScreen);
