import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from '../components/common';
import * as ActionTypes from '../actions/types';
import styles from './styles';

class AfterCardsScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  static navigationOptions = {
    header: null
  };

  renderChosenCardsText() {
    const {
      gameMode,
      selectedCards: {
        red: selectedRedCard,
        orange: selectedOrangeCard,
        green: selectedGreenCard
      }
    } = this.props;

    const render = [];

    if (gameMode === ActionTypes.GAME_MODE_3_MOVES) {
      const renderTmp = [
        <Text key={selectedRedCard} style={{ color: '#B8282E' }}>
          {selectedRedCard}
        </Text>,
        ', ',
        <Text key={selectedOrangeCard} style={{ color: '#F7941C' }}>
          {selectedOrangeCard}
        </Text>,
        ', '
      ];

      render.push(...renderTmp);
    }

    render.push(
      <Text key={selectedGreenCard} style={{ color: '#39B549' }}>
        {selectedGreenCard}
      </Text>
    );

    return render;
  }

  render() {
    const {
      selectedCards: {
        red: selectedRedCard,
        orange: selectedOrangeCard,
        green: selectedGreenCard
      }
    } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
        >
          <View style={styles.titleContainer}>
            <Text style={[styles.title, styles.font20px]}>
              Vous avez choisi {this.renderChosenCardsText()}. Placez vous dans
              un endroit où vous vous sentez bien et où vous avez assez
              d'espace. Respirez bien et faites comme moi.
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            {/* <Text style={styles.subtitle}>Activez votre Mana (Pouvoir) ! </Text> */}
            {/* <Text style={styles.subtitle}>A vous de jouer ! </Text> */}
          </View>
          <View style={styles.startButtonContainer}>
            <Button onPress={() => this.props.navigation.navigate('Deck')}>
              C'est parti !
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  gameMode: state.gameMode,
  currentDeck: state.cards.currentDeck,
  selectedCards: state.cards.selected,
  allCardsChosen: state.cards.allCardsChosen,
  cardImageSources: state.cards.imageSources
});

const enhance = compose(
  connect(mapStateToProps)
  // require('../utils/withLifecycleLogs').default
);

export default enhance(AfterCardsScreen);
