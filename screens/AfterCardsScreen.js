import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from '../components/common';

class AfterCardsScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  static navigationOptions = {
    header: null
  };

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
            <Text style={styles.titleFirst}>
              Vous avez choisi{' '}
              <Text style={{ color: '#B8282E' }}>{selectedRedCard}</Text>,{' '}
              <Text style={{ color: '#F7941C' }}>{selectedOrangeCard}</Text>,{' '}
              <Text style={{ color: '#39B549' }}>{selectedGreenCard}</Text>.
              Placez vous dans un endroit où vous vous sentez bien et où vous
              avez assez d'espace. Respirez bien et faites comme moi.
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            {/* <Text style={styles.subtitle}>Activez votre Mana (Pouvoir) ! </Text> */}
            {/* <Text style={styles.subtitle}>A vous de jouer ! </Text> */}
          </View>
          <View style={styles.startButtonContainer}>
            <Button
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Deck')}
            >
              C'est parti !
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = {
  container: { flex: 1 },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
  },
  titleContainer: {
    flex: 3,
    paddingTop: '15%'
  },
  titleFirst: {
    fontSize: 20,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  subtitleContainer: {
    flex: 1
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  homeImageContainer: {
    flex: 6
  },
  homeImage: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  startButtonContainer: { flex: 1 },
  startButton: {
    alignSelf: 'center',
    fontFamily: 'charcuterie-sans-inline',
    backgroundColor: '#000'
  },
  websites: { flex: 1 },
  websiteLink: {
    backgroundColor: 'transparent'
  },
  copyrightContainer: { flex: 1 },
  copyright: { backgroundColor: 'transparent' }
};

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
