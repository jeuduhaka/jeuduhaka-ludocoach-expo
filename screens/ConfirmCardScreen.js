import React from '/utils/enhancedReact';
import { View, ImageBackground, Text } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _get from 'lodash.get';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { NavigationActions } from 'react-navigation';

import Layout from '../constants/Layout';
import I18n from '../i18n';

import { cardConfirmed, cardCancelled } from '../actions';
import { Button } from '../components/common';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';
import ChooseCardText from '../components/ChooseCardText';

import cardImageSources from '../stores/CardImageSources';

const backAction = NavigationActions.back();

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

    const { currentDeck, selectedCards, onCardConfirm, onCardCancel, navigation } = this.props;

    const cardName = selectedCards[currentDeck];
    const imagePath = `front.${currentDeck}.${cardName}`;

    return (
      <View style={containerStyle}>
        <View style={styles.navigationHeader}>
          <BackButton navigation={navigation} tintColor={'#ffffff'} />
          <HomeButton navigation={navigation} tintColor={'#ffffff'} />
          <ChooseCardText currentDeck={this.props.currentDeck} />
        </View>
        <View style={imageContainerStyle}>
          <ImageBackground style={imageStyle} source={_get(cardImageSources, imagePath)}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{I18n.t(cardName)}</Text>
            </View>
          </ImageBackground>
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
            onPress={() => {
              onCardConfirm(currentDeck);
              if (currentDeck != 'green') {
                navigation.navigate('Deck');
                return;
              }
              navigation.navigate('AfterCards');
            }}
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
            onPress={() => {
              onCardCancel();
              navigation.dispatch(backAction);
            }}
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
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#000000',
  },
  navigationHeader: { flex: 1 / 10 },
  imageContainerStyle: {
    flex: 7 / 10,
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'contain',
    // width: Layout.window.width * 0.85,
    // backgroundColor: 'orange',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    // flexDirection: 'column',
    // flexWrap: 'nowrap',
    flexGrow: 1,
    // flexShrink: 1,
    overflow: 'scroll',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(255,0,0,0.3)'
    backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: 'yellow',
    width: Layout.window.width * 0.7,
  },
  title: {
    flex: 2 / 9,
    // color: colors.black,
    color: '#ffffff',
    fontFamily: 'charcuterie-sans-inline',
    fontSize: (Layout.window.width * 0.7) / 5.5,
    letterSpacing: 0.5,
    // borderWidth: 1,
    // borderColor: 'blue',
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
