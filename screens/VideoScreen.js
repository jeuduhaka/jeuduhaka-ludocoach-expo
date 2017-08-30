import React from 'react';
import {
  Image,
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Video } from 'expo';
// import styles from './screens.style';

const styles = {
  videoContainer: {
    flex: 1
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
};

export default class VideoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.videoName
  });

  render() {
    return (
      <View style={styles.videoContainer}>
        <Video
          ref={this._mountVideo}
          source={this.props.navigation.state.params.videoSource}
          style={[
            styles.backgroundVideo
            // styles.video,
            // {
            //   opacity: this.state.showVideo ? 1.0 : 0.0,
            //   width: this.state.videoWidth,
            //   height: this.state.videoHeight
            // }
          ]}
          resizeMode={Video.RESIZE_MODE_CONTAIN}
          // onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
          // onLoadStart={this._onLoadStart}
          // onLoad={this._onLoad}
          // onError={this._onError}
          // onFullscreenUpdate={this._onFullscreenUpdate}
          // onReadyForDisplay={this._onReadyForDisplay}
          useNativeControls
          // shouldPlay
        />
      </View>
    );
  }
}
