import React, { PropTypes } from 'react';
import {
  View,
  Text
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import DecksContainer from '../components/DecksContainer';
import Card from '../components/Card';
import ChooseCardText from '../components/ChooseCardText';
import { cardPressed } from '../actions';

class ChooseCardGridScreen extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  shouldComponentUpdate(nextProps) {
    return false;
  }

  displayCardRows() {
    const { cardImageSources, currentDeck, cardPressed } = this.props;

    const currentImageSources = Object.entries(
      cardImageSources.front[currentDeck]
    );
    const rows = [];

    const cards = currentImageSources.map(([cardName, imageSource]) => (
        <Card
          key={cardName}
          name={cardName}
          imageSource={imageSource}
          onPress={() => cardPressed(cardName)}
        />
    ));

    const NB_CARDS_PER_ROW = 3;

    for (let i = 0; i < NB_CARDS_PER_ROW; ++i) {
      rows.push(
        <DecksContainer key={i} style={styles.rowStyle}>
          {cards.slice(i * NB_CARDS_PER_ROW, (i * NB_CARDS_PER_ROW) + NB_CARDS_PER_ROW)}
        </DecksContainer>
      );
    }

    return (
      <View style={{ flex: 9 }}>
        {rows}
      </View>
    );
  }

  render() {
    const {
      containerStyle,
      textStyle,
      rowStyle,
    } = styles;

    return (
      <View style={containerStyle}>
        <ChooseCardText />
        {this.displayCardRows()}
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
    // paddingTop: 30,
  },
  textStyle: {
    color: '#FFF'
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#00ff00'
  }
};

const mapStateToProps = state => ({
  // gameMode: state.gameMode,
  currentDeck: state.cards.currentDeck,
  allCardsChosen: state.cards.allCardsChosen,
  cardImageSources: state.cards.imageSources,
  cardConfirmed: state.cards.cardConfirmed,
});

const enhance = compose(
  connect(
    mapStateToProps,
    { cardPressed }
  ),
  // require('../utils/withLifecycleLogs').default
);

export default enhance(ChooseCardGridScreen);
