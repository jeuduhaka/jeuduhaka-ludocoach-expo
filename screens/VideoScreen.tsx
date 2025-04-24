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
    abandonment: require('../assets/videos/abandonment-fr.mp4'),
    anger: require('../assets/videos/anger-fr.mp4'),
    disgust: require('../assets/videos/disgust-fr.mp4'),
    doubt: require('../assets/videos/doubt-fr.mp4'),
    threat: require('../assets/videos/threat-fr.mp4'),
    fear: require('../assets/videos/fear-fr.mp4'),
    sadness: require('../assets/videos/sadness-fr.mp4'),
    violence: require('../assets/videos/violence-fr.mp4'),
    'joker-red': require('../assets/videos/joker-red-fr.mp4'),
  },
  orange: {
    action: require('../assets/videos/action-fr.mp4'),
    courage: require('../assets/videos/courage-fr.mp4'),
    movement: require('../assets/videos/movement-fr.mp4'),
    patience: require('../assets/videos/patience-fr.mp4'),
    preparation: require('../assets/videos/preparation-fr.mp4'),
    prevention: require('../assets/videos/prevention-fr.mp4'),
    protection: require('../assets/videos/protection-fr.mp4'),
    unity: require('../assets/videos/unity-fr.mp4'),
    'joker-orange': require('../assets/videos/joker-orange-fr.mp4'),
  },
  green: {
    love: require('../assets/videos/love-fr.mp4'),
    calm: require('../assets/videos/calm-fr.mp4'),
    confidence: require('../assets/videos/confidence-fr.mp4'),
    energy: require('../assets/videos/energy-fr.mp4'),
    'self-esteem': require('../assets/videos/self-esteem-fr.mp4'),
    strength: require('../assets/videos/strength-fr.mp4'),
    joy: require('../assets/videos/joy-fr.mp4'),
    peace: require('../assets/videos/peace-fr.mp4'),
    'joker-green': require('../assets/videos/joker-green-fr.mp4'),
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
