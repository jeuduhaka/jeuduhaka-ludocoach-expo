import React from 'react';
import { Text, Image, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import i18n from '../i18n';

import { Button } from '../components/common';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

import * as ActionTypes from '../actions/types';
import { afterCardsButtonPressed } from '../actions';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

class AfterCardsScreen extends React.Component<{
  gameMode: string;
  selectedCards: {
    red: string;
    orange: string;
    green: string;
  };
  currentDeck: string;
  afterCardsButtonPressed: (currentDeck: string) => { type: string };
}> {
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

  render() {
    const { currentDeck, afterCardsButtonPressed } = this.props;
    const navigation = useNavigation();

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
              {i18n.t('youHaveChosen')} {this.renderChosenCardsText()}
              {i18n.t('placeYourself')}
            </Text>
            <View style={styles.nextButtonContainer}>
              <Button
                onPress={() => {
                  afterCardsButtonPressed(currentDeck);
                  if (currentDeck != 'green') {
                    navigation.navigate('Deck');
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
}

// TODO specify any
const mapStateToProps = (state: any) => ({
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
