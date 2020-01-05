import React from '/utils/enhancedReact';
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
import { Video } from 'expo-av';
import { compose } from 'redux';
import { connect } from 'react-redux';

//from @expo/videoplayer with custom Height
// import VideoPlayer from '../components/VideoPlayer';
import VideoPlayer from 'expo-video-player';
// import NavigationHeader from '../components/NavigationHeader';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';
// import styles from './screens.style';
import { videoEnded, backHome } from '../actions';
import { GAME_MODE_1_MOVE } from '../actions/types';
// import videoSources from '../stores/CardVideoSourcesRemote.js';
import videoSources from '../stores/CardVideoSourcesLocal.js';

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

  shouldComponentUpdate(nextProps, nextState) {
    // const { currentDeck, selectedCards } = nextProps;
    // const cardName = selectedCards[currentDeck];
    //
    // if (!cardName) {
    //   return false;
    // }
    //
    // return true;
    return false;
  }

  render() {
    const { currentDeck, selectedCards, navigation } = this.props;

    const cardName = selectedCards[currentDeck];
    const videoSource = videoSources[currentDeck][cardName];

    return (
      <View style={styles.videoContainer}>
        {/* <NavigationHeader tintColor={'#ffffff'} /> */}
        <BackButton navigation={navigation} tintColor={'#ffffff'} />
        <HomeButton navigation={navigation} tintColor={'#ffffff'} />

        <VideoPlayer
          videoProps={{
            // style: styles.backgroundVideo,
            shouldPlay: true, // config.autoplayVideo,
            // isMuted:  config.muteVideo,
            isMuted: false,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            // source: {
            //   // uri: this.state.videoUri,
            // },
            source: videoSource,

            // positionMillis: this.state.playback,
            // style: {
            //   width: videoWidth,
            //   height: videoHeight,
            // },
            // onReadyForDisplay: (naturalSize, status) => {
            //   console.log('onReadyForDisplay');
            //   console.log(status);
            // },
            // onLoadStart: () => {
            //   console.log('onLoadStart');
            // },
            // onLoad: status => {
            //   // console.log(this._video);
            //   console.log(`ON LOAD : ${JSON.stringify(status)}`);
            //   // if (!Constants.isDevice && status.isLoaded) {
            //   //   this._playbackInstance.playFromPositionAsync(25000);
            //   // }
            //   // this._video.playFromPositionAsync(0);
            // },
          }}
          inFullscreen
          // isPortrait={this.state.isPortrait}
          // nextCallback={() => {
          //   const { currentDeck, videoEnded, backHome, gameMode } = this.props;

          //   // if (gameMode === GAME_MODE_1_MOVE) {
          //   //   backHome();
          //   // } else {
          //   videoEnded(currentDeck);
          //   // }
          // }}
          playbackCallback={status => {
            if (status.didJustFinish) {
              // console.log(currentDeck);
              // console.log('entered');
              this.props.videoEnded(currentDeck);
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
