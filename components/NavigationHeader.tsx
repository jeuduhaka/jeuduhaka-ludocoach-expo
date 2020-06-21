import React from 'react';
import { Button, Text, View, TouchableOpacity, Platform } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import { backHome, goBack } from '../actions';

const ICON_COLOR = '#014DA2';
const CENTER_ICON_SIZE = 36;
const BOTTOM_BAR_ICON_SIZE = 30;

const HomeIcon = ({ tintColor }: { tintColor: string }) => (
  <MaterialIcons
    name={'home'}
    size={CENTER_ICON_SIZE}
    color={tintColor}
    style={{ textAlign: 'center', backgroundColor: 'transparent' }}
  />
);

const NavigationHeader = ({
  onBackPress,
  onHomePress,
  tintColor,
  ...otherProps
}: {
  onBackPress: () => {};
  onHomePress: () => {};
  tintColor: string;
}) => {
  return (
    <View style={[{ position: 'absolute', top: 0, zIndex: 10 }]}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          flexDirection: 'row',
          //zIndex needed to be on top of Video
          zIndex: 5,
        }}>
        <HeaderBackButton onPress={onBackPress} tintColor={tintColor} />
      </View>
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
    </View>
  );
};
// TODO remove any
const mapStateToProps = (state: any) => ({});

// TODO remove any
const mapDispatchToProps = (dispatch: any) => {
  return {
    onBackPress: () => {
      // dispatch(UndoActionCreators.undo());
      // dispatch(goBack());
    },
    // onReset: () => dispatch(UndoActionCreators.clearHistory()),
    onHomePress: () => {
      // dispatch(backHome());
    },
    // onUndo: () => dispatch(UndoActionCreators.undo()),
    // onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(NavigationHeader);
