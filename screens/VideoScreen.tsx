import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import VideoPlayer from 'expo-video-player';

import { AssetsSourcesType } from '../types';

import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';
import { videoEnded, backHome, nextDeck } from '../actions';
import { GAME_MODE_1_MOVE } from '../actions/types';
import { RootStackParamList } from '../navigators/AppNavigator';

const videoSources: AssetsSourcesType = {
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

const styles = StyleSheet.create({
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
});

type VideoScreenRouteProp = RouteProp<RootStackParamList, 'Video'>;

type VideoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Video'
>;

type Props = {
  route: VideoScreenRouteProp;
  navigation: VideoScreenNavigationProp;
};

function VideoScreen({ route, navigation }: Props) {
  const { gameMode, currentDeck, selectedCards } = route.params;
  const videoSource = videoSources[currentDeck][selectedCards[currentDeck]];

  return (
    <View style={styles.videoContainer}>
      <BackButton tintColor={'#ffffff'} />
      <HomeButton tintColor={'#ffffff'} />

      <VideoPlayer
        videoProps={{
          // style: styles.backgroundVideo,
          shouldPlay: true, // config.autoplayVideo,
          // isMuted:  config.muteVideo,
          isMuted: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: videoSource,
        }}
        fullscreen={{
          inFullscreen: true
        }}
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

          if (gameMode === GAME_MODE_1_MOVE) {
            navigation.navigate('Home');
            return;
          }

          if (currentDeck !== 'green') {
            navigation.push('Deck', {
              ...route.params,
              currentDeck: nextDeck(currentDeck),
            });
          } else {
            navigation.push('Final');
          }
        }}
      />
    </View>
  );
}

export { VideoScreen };
