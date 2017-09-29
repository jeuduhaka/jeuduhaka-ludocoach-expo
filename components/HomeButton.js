import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import { backHome } from '../actions';

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

const NavigationHeader = ({ onHomePress, onReset, tintColor }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 10,
        flexDirection: 'row',
        //zIndex needed to be on top of Video
        zIndex: 2,
      }}>
      <TouchableOpacity
        onPress={onHomePress}
        style={{
          marginVertical: 5,
        }}>
        <HomeIcon tintColor={tintColor} />
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onReset: () => dispatch(UndoActionCreators.clearHistory()),
    onHomePress: () => {
      dispatch(UndoActionCreators.clearHistory());
      dispatch(backHome());
    },
    // onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
  };
};

const enhance = compose(connect(null, mapDispatchToProps));

export default enhance(NavigationHeader);
