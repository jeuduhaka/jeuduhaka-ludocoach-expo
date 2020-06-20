import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigation, CommonActions } from '@react-navigation/native';

import VideoPlayer from 'expo-video-player';
// import NavigationHeader from '../components/NavigationHeader';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';
import { videoEnded, backHome } from '../actions';
import { GAME_MODE_1_MOVE } from '../actions/types';
// import videoSources from '../stores/CardVideoSourcesLocal.js';

const videoSources = {
  red: {
    abandonment: require('../assets/videos/abandonment-render-fr.mp4'),
    anger: require('../assets/videos/anger-render-fr.mp4'),
    disgust: require('../assets/videos/disgust-render-fr.mp4'),
    doubt: require('../assets/videos/doubt-render-fr.mp4'),
    threat: require('../assets/videos/threat-render-fr.mp4'),
    fear: require('../assets/videos/fear-render-fr.mp4'),
    sadness: require('../assets/videos/sadness-render-fr.mp4'),
    violence: require('../assets/videos/violence-render-fr.mp4'),
    'joker-red': require('../assets/videos/joker-red-render-fr.mp4'),
  },
  orange: {
    action: require('../assets/videos/action-render-fr.mp4'),
    courage: require('../assets/videos/courage-render-fr.mp4'),
    movement: require('../assets/videos/movement-render-fr.mp4'),
    patience: require('../assets/videos/patience-render-fr.mp4'),
    preparation: require('../assets/videos/preparation-render-fr.mp4'),
    prevention: require('../assets/videos/prevention-render-fr.mp4'),
    protection: require('../assets/videos/protection-render-fr.mp4'),
    unity: require('../assets/videos/unity-render-fr.mp4'),
    'joker-orange': require('../assets/videos/joker-orange-render-fr.mp4'),
  },
  green: {
    love: require('../assets/videos/love-render-fr.mp4'),
    calm: require('../assets/videos/calm-render-fr.mp4'),
    confidence: require('../assets/videos/confidence-render-fr.mp4'),
    energy: require('../assets/videos/energy-render-fr.mp4'),
    'self-esteem': require('../assets/videos/self-esteem-render-fr.mp4'),
    strength: require('../assets/videos/strength-render-fr.mp4'),
    joy: require('../assets/videos/joy-render-fr.mp4'),
    peace: require('../assets/videos/peace-render-fr.mp4'),
    'joker-green': require('../assets/videos/joker-green-render-fr.mp4'),
  },
};

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

const resetAction = CommonActions.reset({
  index: 0,
  routes: [{ name: 'Home' }],
});

function VideoScreen({
  currentDeck,
  selectedCards,
  gameMode,
  videoEnded,
}: {
  currentDeck: any;
  selectedCards: any;
  gameMode: any;
  videoEnded: any;
}) {
  const navigation = useNavigation();

  console.log(`currentDeck: ${currentDeck}`);
  console.log(`selectedCards: ${selectedCards}`);

  // let cardName = useRef();
  const cardName = selectedCards[currentDeck];
  // let videoSource = useRef();
  let videoSource;

  if (
    videoSources.hasOwnProperty(currentDeck) &&
    videoSources[currentDeck].hasOwnProperty(cardName)
  ) {
    videoSource = videoSources[currentDeck][cardName];
  }

  console.log(`videoSource: ${videoSource}`);

  // useEffect(() => {
  //   console.log(`

  //   `);

  //   if (currentDeck && cardName && videoSource && videoSource.current) {
  //     videoSource.current.value = videoSources[currentDeck][cardName.current.value];
  //   }

  //   if (currentDeck && cardName && cardName.current) {
  //     cardName.current.value = selectedCards[currentDeck];
  //   }
  // }, [currentDeck, cardName.current, videoSource.current]);

  useEffect(() => {
    return () => {
      console.log('This will be logged on unmount');
    };
  });

  const renderVideo = () => (
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
          source: videoSource,
        }}
        inFullscreen
        playbackCallback={(status) => {
          if (!status.isLoaded) {
            if (status.error) {
              console.warn(status.error);
            }
            return;
          }

          if (!status.didJustFinish) {
            return;
          }

          videoEnded(currentDeck);

          if (gameMode === GAME_MODE_1_MOVE) {
            navigation.dispatch(resetAction);
            //RESET
            return;
          }

          if (currentDeck !== 'green') {
            navigation.navigate('Deck');
          } else {
            navigation.navigate('Final');
          }
        }}
      />
    </View>
  );

  if (videoSource) {
    return renderVideo();
  }

  return <View />;
}

const mapStateToProps = (state: any) => ({
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
