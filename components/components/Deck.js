import React, { PropTypes } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Card from './Card';
import { deckPressed } from '../actions';

class Deck extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    deckPressed: PropTypes.func.isRequired,
  };

  state = {
    isDeckVisible: true,
  };

  onPress() {
    this.props.deckPressed(this.props.color);
  }

  showCardFront() {
    this.setState({ isDeckVisible: false });
  }

  render() {
    if (this.props.cards && this.props.cards[this.props.color]) {
      console.log(this.props.color);

      let isActive = false;

      if (this.props.color === this.props.deckColor) {
        isActive = true;
      }

      console.log(`${this.props.deckColor} isActive: ${isActive}`);

      const isClickable = this.props.allCardsChosen && isActive;

      return (
        <Card
          isClickable={isClickable}
          cardName={this.props.cards[this.props.color]}
        />
      );
    }

    let isActive = false;

    if (this.props.color === 'red') {
      isActive = true;
    }

    if (this.props.color === 'orange' &&
        (this.props.cards && this.props.cards.red)) {
        isActive = true;
    }

    if (this.props.color === 'green' &&
        (this.props.cards && this.props.cards.orange)) {
        isActive = true;
    }

    if (!isActive) {
      return (
        <Image
          style={styles.containerStyle}
          source={cardImages[this.props.color].grayscale}
        />
      );
    } else if (this.state.isDeckVisible) {
      return (
        <TouchableHighlight onPress={this.onPress.bind(this)}>
          <Image
            style={styles.containerStyle}
            source={cardImages[this.props.color].colored}
          />
        </TouchableHighlight>
      );
    }
  }
}

const styles = {
  containerStyle: {
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    height: 200,
    width: 100,
  },
};

// state refers to the "current state" of your store.
const mapStateToProps = state => ({
  gameMode: state.gameMode,
  cards: state.cards,
  allCardsChosen: state.cards.allCardsChosen,
  deckColor: state.cards.deckColor,
});

export default connect(
  mapStateToProps,
  { deckPressed }
)(Deck);
