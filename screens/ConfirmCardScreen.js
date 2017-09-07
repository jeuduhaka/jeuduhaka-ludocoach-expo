import React from 'react';
import { View, Image, Text } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _get from 'lodash.get';

import { cardConfirmed, cardCancelled } from '../actions';
import { Button } from '../components/common';

class ConfirmCardScreen extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  };

  render() {
    const {
      containerStyle,
      imageContainerStyle,
      imageStyle,
      descriptionContainerStyle,
      descriptionStyle,
      buttonsContainerStyle
    } = styles;

    const {
      currentDeck,
      cardImageSources,
      selectedCards,
      cardConfirmed,
      cardCancelled
    } = this.props;

    const cardName = selectedCards[currentDeck];
    const imagePath = `front.${currentDeck}.${cardName}`;

    return (
      <View style={containerStyle}>
        <View style={imageContainerStyle}>
          <Image style={imageStyle} source={_get(cardImageSources, imagePath)}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{cardName}</Text>
            </View>
          </Image>
        </View>
        {/* <View style={descriptionContainerStyle}>
          <Text style={descriptionStyle}>
            En équilibre sur une jambe, l'autre est repliée.
            Le bras avant tente de cacher le visage.
            Le bras arrière est tendu vers l'arrière.
          </Text>
        </View> */}
        <View style={buttonsContainerStyle}>
          <Button
            onPress={() => cardConfirmed(currentDeck)}
            style={{
              textStyle: {
                alignSelf: 'center',
                color: '#000000',
                backgroundColor: '#ffffff',
                fontSize: 16,
                fontWeight: '600',
                paddingTop: 10,
                paddingBottom: 10
              },
              buttonStyle: {
                // flex: 1, //expands as much as content possibly can
                alignSelf: 'stretch',
                backgroundColor: '#ffffff',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#000000',
                marginLeft: 5,
                marginRight: 5
              }
            }}
          >
            Je choisis
          </Button>
          <Button
            onPress={() => cardCancelled()}
            style={{
              textStyle: {
                alignSelf: 'center',
                color: '#ffffff',
                backgroundColor: '#000000',
                fontSize: 16,
                fontWeight: '600',
                paddingTop: 10,
                paddingBottom: 10
              },
              buttonStyle: {
                // flex: 1, //expands as much as content possibly can
                alignSelf: 'stretch',
                backgroundColor: '#000000',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#ffffff',
                marginLeft: 5,
                marginRight: 5
              }
            }}
          >
            Choisir une autre carte
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#000000',
    paddingTop: 30
  },
  imageContainerStyle: {
    flex: 3
  },
  imageStyle: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    // flexWrap: 'nowrap',
    flexGrow: 1,
    flexShrink: 1,
    overflow: 'scroll',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(255,0,0,0.3)'
    backgroundColor: 'transparent'
    // borderWidth: 1,
    // borderColor: 'yellow'
  },
  title: {
    // color: colors.black,
    color: '#ffffff',
    fontFamily: 'charcuterie-sans-inline',
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    bottom: '10%'
    // borderWidth: 1,
    // borderColor: 'blue'
  },
  // descriptionContainerStyle: {
  //   flex: 1,
  //   padding: 10,
  // },
  // descriptionStyle: {
  //   color: '#ffffff',
  // },
  buttonsContainerStyle: {
    flex: 1,
    paddingTop: 30
  }
};

const mapStateToProps = state => ({
  gameMode: state.gameMode,
  currentDeck: state.cards.currentDeck,
  selectedCards: state.cards.selected,
  allCardsChosen: state.cards.allCardsChosen,
  cardImageSources: state.cards.imageSources
});

const enhance = compose(
  connect(mapStateToProps, { cardConfirmed, cardCancelled })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(ConfirmCardScreen);
