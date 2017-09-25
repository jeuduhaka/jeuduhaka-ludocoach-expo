import React from '/utils/enhancedReact';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Header, HeaderBackButton, HeaderTitle } from 'react-navigation';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import { backHome, goBack } from '../actions';

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

const NavigationHeader = ({
  onBackPress,
  onUndo,
  onHomePress,
  onReset,
  gameMode,
  tintColor,
}) => {
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
      <HeaderBackButton onPress={onBackPress} tintColor={tintColor} />
      {/* <HeaderTitle
      style={{
        position: 'absolute',
        fontSize: 36,
        fontFamily: 'charcuterie-sans-inline'
        // textAlign: 'center'
      }}
    >
      Menace
    </HeaderTitle> */}
      <TouchableOpacity onPress={onHomePress}>
        <HomeIcon tintColor={tintColor} />
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    onBackPress: () => {
      dispatch(UndoActionCreators.undo());
      dispatch(goBack());
    },
    // onReset: () => dispatch(UndoActionCreators.clearHistory()),
    onHomePress: () => {
      dispatch(backHome());
    },
    // onUndo: () => dispatch(UndoActionCreators.undo()),
    // onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(NavigationHeader);
