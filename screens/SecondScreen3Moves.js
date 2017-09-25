import React from '/utils/enhancedReact';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import I18n from '../i18n';
import SecondScreen from './SecondScreen';
import { secondScreen3MovesPassed } from '../actions/';

const SecondScreen3Moves = ({ onPress }) => (
  <SecondScreen
    textContent={[
      I18n.t('chooseCards'),
      ' ',
      <Text key="text-1" style={{ color: '#B8282E' }}>
        1.{I18n.t('having')}
      </Text>,
      ' ',
      <Text key="text-2" style={{ color: '#F7941C' }}>
        2.{I18n.t('doing')}
      </Text>,
      ' ',
      <Text key="text-3" style={{ color: '#39B549' }}>
        3.{I18n.t('being')}
      </Text>,
    ]}
    buttonOnPress={onPress}
  />
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    onPress: () => {
      // dispatch(UndoActionCreators.clearHistory());
      dispatch(secondScreen3MovesPassed());
    },
    // onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(SecondScreen3Moves);
