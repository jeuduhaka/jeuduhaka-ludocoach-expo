import React from '/utilities/enhancedReact';
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

// import { backHome, goBack } from '../actions';

const ICON_COLOR = '#014DA2';
const CENTER_ICON_SIZE = 36;
const BOTTOM_BAR_ICON_SIZE = 30;

const MenuIcon = () => (
  <MaterialIcons
    name={'menu'}
    size={CENTER_ICON_SIZE}
    color={ICON_COLOR}
    style={{ textAlign: 'center', backgroundColor: 'transparent' }}
  />
);

const MenuButton = ({ onPress }) => {
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
      <TouchableOpacity onPress={onPress}>
        <MenuIcon />
      </TouchableOpacity>
    </View>
  );
};
// const mapStateToProps = state => ({
//   gameMode: state.gameMode
// });
//
// const enhance = compose(connect(mapStateToProps, { backHome, goBack }));
//
// export default enhance(MenuButton);
export default MenuButton;
