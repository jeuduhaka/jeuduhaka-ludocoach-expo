import React from '/utils/enhancedReact';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import I18n from '../i18n';

import { Button } from '../components/common';
import NavigationHeader from '../components/NavigatonHeader';

import * as ActionTypes from '../actions/types';
import { afterCardsButtonPressed } from '../actions/';
import styles from './styles';

class AfterCardsScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  static navigationOptions = {
    header: null,
  };

  renderChosenCardsText() {
    const {
      gameMode,
      selectedCards: {
        red: selectedRedCard,
        orange: selectedOrangeCard,
        green: selectedGreenCard,
      },
    } = this.props;

    const render = [];

    if (gameMode === ActionTypes.GAME_MODE_3_MOVES) {
      const renderTmp = [
        <Text key={selectedRedCard} style={{ color: '#B8282E' }}>
          {I18n.t(selectedRedCard)}
        </Text>,
        ', ',
        <Text key={selectedOrangeCard} style={{ color: '#F7941C' }}>
          {I18n.t(selectedOrangeCard)}
        </Text>,
        ', ',
      ];

      render.push(...renderTmp);
    }

    render.push(
      <Text key={selectedGreenCard} style={{ color: '#39B549' }}>
        {I18n.t(selectedGreenCard)}
      </Text>
    );

    return render;
  }

  render() {
    const { currentDeck, afterCardsButtonPressed } = this.props;

    const {
      red: selectedRedCard,
      orange: selectedOrangeCard,
      green: selectedGreenCard,
    } = this.props.selectedCards;

    return (
      <View style={styles.container}>
        <NavigationHeader tintColor={'#014DA2'} />
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
          <View
            style={[styles.titleContainer, styles.navigationHeaderPaddingTop]}>
            <Text style={[styles.title, styles.font20px]}>
              {I18n.t('youHaveChosen')} {this.renderChosenCardsText()}
              {I18n.t('placeYourself')}
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            {/* <Text style={styles.subtitle}>Activez votre Mana (Pouvoir) ! </Text> */}
            {/* <Text style={styles.subtitle}>A vous de jouer ! </Text> */}
          </View>
          <View style={styles.startButtonContainer}>
            <Button onPress={() => afterCardsButtonPressed(currentDeck)}>
              {I18n.t('letsGo')}
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  gameMode: state.gameMode,
  currentDeck: state.cards.present.currentDeck,
  selectedCards: state.cards.present.selected,
  allCardsChosen: state.cards.present.allCardsChosen,
  cardImageSources: state.cards.present.imageSources,
});

const enhance = compose(
  connect(mapStateToProps, { afterCardsButtonPressed })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(AfterCardsScreen);
