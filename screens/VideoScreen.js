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
import { Video, Constants } from 'expo';
import { Header } from 'react-navigation';
import { compose } from 'redux';
import { connect } from 'react-redux';

//from abi-expo-videoplayer with custom Height
import VideoPlayer from '../components/VideoPlayer';
// import styles from './screens.style';
import { videoEnded } from '../actions';

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
// const videoHeight = Dimensions.get('window').height - Header.HEIGHT;
const videoHeight = Dimensions.get('window').height;

const BASE_VIDEO_URI = 'https://s3.eu-west-2.amazonaws.com/frqs-jdh/videos/';

class VideoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // title: navigation.state.params.videoName
    header: null
  });

  constructor(props) {
    super(props);

    // const data = this.props.navigation.state.params.data;
    // const videoId = this.props.navigation.state.params.videoId;
    //
    const { currentDeck, selectedCards, videoSources } = this.props;

    const cardName = selectedCards[currentDeck];
    // const videoSource = videoSources[currentDeck][cardName];

    this.state = {
      // data,
      // links,
      videoUri: `${BASE_VIDEO_URI}${cardName}-render.mp4`,
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
          ref: component => {
            this._playbackInstance = component;
          },
          // style: styles.backgroundVideo,
          shouldPlay: true, // config.autoplayVideo,
          // isMuted:  config.muteVideo,
          resizeMode: Video.RESIZE_MODE_COVER,
          source: {
            uri: this.state.videoUri
          },
          // positionMillis: this.state.playback,
          style: {
            width: videoWidth,
            height: videoHeight
          },
          onLoad: status => {
            // console.log(this._video);
            // console.log(`ON LOAD : ${JSON.stringify(status)}`);
            if (!Constants.isDevice) {
              this._playbackInstance.playFromPositionAsync(25000);
            }
            // this._video.playFromPositionAsync(0);
          }
        }}
        isPortrait={this.state.isPortrait}
        nextCallback={() => {
          const { currentDeck, videoEnded } = this.props;
          videoEnded(currentDeck);
        }}
      />
      // </View>
    );
  }
}

const mapStateToProps = state => ({
  gameMode: state.gameMode,
  currentDeck: state.cards.currentDeck,
  selectedCards: state.cards.selected,
  videoSources: state.cards.videoSources,
  allVideosEnded: state.cards.allVideosEnded
});

const enhance = compose(
  connect(mapStateToProps, { videoEnded })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(VideoScreen);
