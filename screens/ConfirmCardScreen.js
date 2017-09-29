import React from '/utils/enhancedReact';
import { View, Image, Text } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _get from 'lodash.get';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import I18n from '../i18n';

import { cardConfirmed, cardCancelled } from '../actions';
import { Button } from '../components/common';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';
import ChooseCardText from '../components/ChooseCardText';

import cardImageSources from '../stores/CardImageSources';

class ConfirmCardScreen extends React.Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  shouldComponentUpdate(nextProps) {
    const { currentDeck, selectedCards } = nextProps;
    //fix issue when backHome
    return (
      currentDeck !== '' &&
      //Fix issue with missing translation
      selectedCards[currentDeck] !== ''
    );
  }

  render() {
    const {
      containerStyle,
      imageContainerStyle,
      imageStyle,
      descriptionContainerStyle,
      descriptionStyle,
      buttonsContainerStyle,
    } = styles;

    const {
      currentDeck,
      selectedCards,
      onCardConfirm,
      onCardCancel,
    } = this.props;

    const cardName = selectedCards[currentDeck];
    const imagePath = `front.${currentDeck}.${cardName}`;

    return (
      <View style={containerStyle}>
        <View style={styles.navigationHeader}>
          <BackButton tintColor={'#ffffff'} />
          <HomeButton tintColor={'#ffffff'} />
          <ChooseCardText currentDeck={this.props.currentDeck} />
        </View>
        <View style={imageContainerStyle}>
          <Image style={imageStyle} source={_get(cardImageSources, imagePath)}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{I18n.t(cardName)}</Text>
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
            onPress={onCardConfirm.bind(this, currentDeck)}
            style={{
              textStyle: {
                alignSelf: 'center',
                color: '#000000',
                fontSize: 16,
                fontWeight: '600',
                paddingTop: 10,
                paddingBottom: 10,
              },
              buttonStyle: {
                // flex: 1, //expands as much as content possibly can
                alignSelf: 'stretch',
                backgroundColor: '#ffffff',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#000000',
                marginLeft: 5,
                marginRight: 5,
              },
            }}>
            {I18n.t('iChoose')}
          </Button>
          <Button
            onPress={onCardCancel}
            style={{
              textStyle: {
                alignSelf: 'center',
                color: '#ffffff',
                backgroundColor: '#000000',
                fontSize: 16,
                fontWeight: '600',
                paddingTop: 10,
                paddingBottom: 10,
              },
              buttonStyle: {
                // flex: 1, //expands as much as content possibly can
                alignSelf: 'stretch',
                backgroundColor: '#000000',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#ffffff',
                marginLeft: 5,
                marginRight: 5,
              },
            }}>
            {I18n.t('chooseAnotherCard')}
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
  },
  navigationHeader: { flex: 1 / 10 },
  imageContainerStyle: {
    flex: 7 / 10,
    // backgroundColor: 'yellow',
  },
  imageStyle: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
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
    backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: 'yellow'
  },
  title: {
    // color: colors.black,
    color: '#ffffff',
    fontFamily: 'charcuterie-sans-inline',
    fontSize: 50,
    letterSpacing: 0.5,
    bottom: '10%',
    textAlign: 'center',
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
    flex: 2 / 10,
    paddingTop: 30,
  },
};

const mapStateToProps = state => ({
  gameMode: state.gameMode,
  currentDeck: state.cards.present.currentDeck,
  selectedCards: state.cards.present.selected,
  allCardsChosen: state.cards.present.allCardsChosen,
});

const mapDispatchToProps = dispatch => {
  return {
    onCardConfirm: currentDeck => dispatch(cardConfirmed(currentDeck)),
    onCardCancel: () => {
      dispatch(UndoActionCreators.undo());
      dispatch(cardCancelled());
    },
    onRedo: () => dispatch(UndoActionCreators.redo()),
  };
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
  // require('../utils/withLifecycleLogs').default
);

export default enhance(ConfirmCardScreen);
