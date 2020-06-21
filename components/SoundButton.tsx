import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

const ICON_COLOR = '#014DA2';
const CENTER_ICON_SIZE = 36;

const MuteSound = ({ isMuted }: { isMuted: boolean }) => (
  <MaterialIcons
    name={isMuted ? 'volume-off' : 'volume-up'}
    size={CENTER_ICON_SIZE}
    color={ICON_COLOR}
    style={{ textAlign: 'center', backgroundColor: 'transparent' }}
  />
);

class SoundButton extends React.Component<{
  onPress: () => {};
}> {
  render() {
    // TODO do soomething with onPress
    const { onPress } = this.props;

    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          flexDirection: 'row',
          //zIndex needed to be on top of Video
          // TODO make constant
          zIndex: 2,
        }}>
        // TODO do soomething with onPress
        <TouchableOpacity onPress={() => {}}>
          {/* // TODO handle isMuted */}
          <MuteSound isMuted={true} />
        </TouchableOpacity>
      </View>
    );
  }
}
// TODO specify any
const mapStateToProps = (state: any) => ({
  gameMode: state.gameMode,
});

const enhance = compose(connect(mapStateToProps, {}));

export default enhance(SoundButton);
