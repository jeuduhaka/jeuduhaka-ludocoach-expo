import React from '/utils/enhancedReact';
import { Button, Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Expo, { Asset } from 'expo';

import App from '../App';

// import { backHome, goBack } from '../actions';

const ICON_COLOR = '#014DA2';
const CENTER_ICON_SIZE = 36;
const BOTTOM_BAR_ICON_SIZE = 30;

const MuteSound = ({ isMuted }) => (
  <MaterialIcons
    name={isMuted ? 'volume-off' : 'volume-up'}
    size={CENTER_ICON_SIZE}
    color={ICON_COLOR}
    style={{ textAlign: 'center', backgroundColor: 'transparent' }}
  />
);

class SoundButton extends React.Component {
  componentDidMount() {
    // this.loadSoundAsync();
  }

  // async loadSoundAsync() {
  //   // if (__DEV__) return;
  //
  //   try {
  //     const {
  //       soundObject,
  //       status
  //     } = await Expo.Audio.Sound.create(
  //       require('../assets/sounds/normalized-tamtam-loop16bit-1min-volume-0.6.mp3'),
  //       {
  //         // shouldPlay: true,
  //         isLooping: true
  //       }
  //     );
  //
  //     // Your sound is playing!
  //   } catch (error) {
  //     // An error occurred!
  //   }
  // }

  render() {
    const { onPress } = this.props;

    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          flexDirection: 'row',
          //zIndex needed to be on top of Video
          zIndex: 2,
        }}>
        <TouchableOpacity onPress={() => {}}>
          <MuteSound />
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  gameMode: state.gameMode,
});

const enhance = compose(connect(mapStateToProps, {}));

export default enhance(SoundButton);
