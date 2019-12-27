import React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { NavigationActions } from 'react-navigation';

import { goBack } from '../actions';

const ICON_COLOR = '#014DA2';
const CENTER_ICON_SIZE = 36;
const BOTTOM_BAR_ICON_SIZE = 30;

const HomeIcon = ({ tintColor }) => (
  <MaterialIcons
    name={'home'}
    size={CENTER_ICON_SIZE}
    color={tintColor}
    style={{ textAlign: 'center', backgroundColor: 'transparent' }}
  />
);

const backAction = NavigationActions.back();

const BackButton = ({ navigation, onBackPress, onUndo, tintColor }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'row',
        //zIndex needed to be on top of Video
        zIndex: 2,
      }}>
      <HeaderBackButton
        onPress={() => {
          navigation.dispatch(backAction);
          onBackPress();
        }}
        tintColor={tintColor}
      />
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onBackPress: () => {
      dispatch(UndoActionCreators.undo());
      dispatch(goBack());
    },
    // onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
  };
};

const enhance = compose(connect(null, mapDispatchToProps));

export default enhance(BackButton);
