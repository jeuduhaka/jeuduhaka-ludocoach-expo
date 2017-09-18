import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import { Header, HeaderBackButton, HeaderTitle } from 'react-navigation';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import { backHome, goBack } from '../actions';

const ICON_COLOR = '#FFFFFF';
const CENTER_ICON_SIZE = 36;
const BOTTOM_BAR_ICON_SIZE = 30;

const HomeIcon = () => (
  <MaterialIcons
    name={'home'}
    size={CENTER_ICON_SIZE}
    color={ICON_COLOR}
    style={{ textAlign: 'center', backgroundColor: 'transparent' }}
  />
);

const NavigationHeader = ({ goBack, gameMode, backHome }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'row',
        //zIndex needed to be on top of Video
        zIndex: 2
      }}
    >
      <HeaderBackButton onPress={() => goBack()} tintColor={'white'} />
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
      <TouchableOpacity onPress={() => backHome(gameMode)}>
        <HomeIcon />
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => ({
  gameMode: state.gameMode
});

const enhance = compose(connect(mapStateToProps, { backHome, goBack }));

export default enhance(NavigationHeader);
