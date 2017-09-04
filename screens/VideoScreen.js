import React from 'react';
import {
  Image,
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Video } from 'expo';
import { Header } from 'react-navigation';
//from abi-expo-videoplayer with custom Height
import VideoPlayer from '../components/VideoPlayer';
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

const videoWidth = Dimensions.get('window').width;
const videoHeight = Dimensions.get('window').height - Header.HEIGHT;

export default class VideoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.videoName
  });

  constructor(props) {
    super(props);

    // const data = this.props.navigation.state.params.data;

    this.state = {
      // data,
      // links,
      isPortrait: true
      // playback: this.props.playback,
      // uri:
      //   this.props.offline.state === STATES.DOWNLOADING
      //     ? this.props.offline.uri.uri
      //     : data.videos['240p'],
    };
  }

  render() {
    return (
      // <View style={styles.videoContainer}>
      <VideoPlayer
        videoProps={{
          // style: styles.backgroundVideo,
          shouldPlay: true, // config.autoplayVideo,
          // isMuted:  config.muteVideo,
          resizeMode: Video.RESIZE_MODE_COVER,
          source: {
            uri: this.props.navigation.state.params.videoSource
          },
          // positionMillis: this.state.playback,
          style: {
            width: videoWidth,
            height: videoHeight
          }
        }}
        isPortrait={this.state.isPortrait}
      />
      // </View>
    );
  }
}
