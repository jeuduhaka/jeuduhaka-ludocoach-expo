import React from 'react';
import {
  Image,
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Video, Constants } from 'expo';
import { compose } from 'redux';
import { connect } from 'react-redux';

//from @expo/videoplayer with custom Height
import VideoPlayer from '../components/VideoPlayer';
import NavigationHeader from '../components/NavigatonHeader';
// import styles from './screens.style';
import { videoEnded, backHome } from '../actions';
import { GAME_MODE_1_MOVE } from '../actions/types';
import videoSources from '../stores/CardVideoSourcesRemote.js';

const styles = {
  videoContainer: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};

const videoWidth = Dimensions.get('window').width;
// const videoHeight = Dimensions.get('window').height - Header.HEIGHT;
const videoHeight = Dimensions.get('window').height;

const BASE_VIDEO_URI = 'https://s3.eu-west-2.amazonaws.com/frqs-jdh/videos/';

class VideoScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // headerStyle: {
    //   position: 'absolute',
    //   backgroundColor: 'transparent',
    //   zIndex: 100,
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   borderWidth: 0
    // }
  };

  constructor(props) {
    super(props);

    // const data = this.props.navigation.state.params.data;
    // const videoId = this.props.navigation.state.params.videoId;
    //
    const { currentDeck, selectedCards } = this.props;

    const cardName = selectedCards[currentDeck];
    // const videoSource = videoSources[currentDeck][cardName];

    this.state = {
      // data,
      // links,
      videoUri: `${BASE_VIDEO_URI}${cardName}-render.mp4`,
      isPortrait: true,
      // playback: this.props.playback,
      // uri:
      //   this.props.offline.state === STATES.DOWNLOADING
      //     ? this.props.offline.uri.uri
      //     : data.videos['240p'],
    };
  }

  render() {
    return (
      <View style={styles.videoContainer}>
        <NavigationHeader tintColor={'#ffffff'} />

        <VideoPlayer
          videoProps={{
            ref: component => {
              this._playbackInstance = component;
            },
            // style: styles.backgroundVideo,
            shouldPlay: true, // config.autoplayVideo,
            // isMuted:  config.muteVideo,
            isMuted: false,
            resizeMode: Video.RESIZE_MODE_COVER,
            source: {
              uri: this.state.videoUri,
            },
            // positionMillis: this.state.playback,
            style: {
              width: videoWidth,
              height: videoHeight,
            },
            onLoad: status => {
              // console.log(this._video);
              // console.log(`ON LOAD : ${JSON.stringify(status)}`);
              if (!Constants.isDevice && status.isLoaded) {
                this._playbackInstance.playFromPositionAsync(25000);
              }
              // this._video.playFromPositionAsync(0);
            },
          }}
          isPortrait={this.state.isPortrait}
          nextCallback={() => {
            const { currentDeck, videoEnded, backHome, gameMode } = this.props;

            if (gameMode === GAME_MODE_1_MOVE) {
              backHome();
            } else {
              videoEnded(currentDeck);
            }
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  gameMode: state.gameMode,
  currentDeck: state.cards.present.currentDeck,
  selectedCards: state.cards.present.selected,
  allVideosEnded: state.cards.present.allVideosEnded,
});

const enhance = compose(
  connect(mapStateToProps, { videoEnded, backHome })
  // require('../utils/withLifecycleLogs').default
);

export default enhance(VideoScreen);
