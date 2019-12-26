import { AsyncStorage, View, StyleSheet, StatusBar, Platform, Text } from 'react-native';
import { Provider } from 'react-redux';
import Expo, { AppLoading } from 'expo';
import * as Font from 'expo-font';
import I18n from 'ex-react-native-i18n';
import { MaterialIcons, Foundation, Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
// import Sentry from 'sentry-expo';
import { activateKeepAwake } from 'expo-keep-awake';
import React from '/utils/enhancedReact';

import AppWithNavigationState from './navigators/AppWithNavigationState';
import configureStore from './config/configureStore';
// import imageSources from './stores/CardImageSources';
// import videoSources from './stores/CardVideoSourcesLocal';
import { cacheImages, cacheVideos, cacheFonts } from './utils/cacheAssetsAsync';

// import DownloadManager from './utils/DownloadManager';

const store = configureStore();

async function _loadSoundAsync() {
  if (__DEV__) return;

  try {
    const { soundObject, status } = await Expo.Audio.Sound.create(
      require('./assets/sounds/normalized-tamtam-loop16bit-1min-volume-0.6.mp3'),
      {
        shouldPlay: true,
        isLooping: true,
      }
    );
    // Your sound is playing!
  } catch (error) {
    // An error occurred!
    console.warn(error);
  }
}

class App extends React.Component {
  // static sound = new Expo.Audio.Sound();

  state = {
    isLoadingComplete: false,
    store: null,
  };

  componentWillMount() {
    //Intercept react-native error handling
    this.defaultHandler = ErrorUtils.getGlobalHandler();
    ErrorUtils.setGlobalHandler(this.wrapGlobalHandler.bind(this));
  }

  componentWillUnmount() {
    // this._downloadManager && this._downloadManager.teardown();
  }

  async wrapGlobalHandler(error, isFatal) {
    // If the error kills our app in Release mode, make sure we don't rehydrate
    // with an invalid Redux state and cleanly go back to home page instead
    if (isFatal && !__DEV__) AsyncStorage.clear();

    //Once finished, make sure react-native also gets the error
    if (this.defaultHandler) this.defaultHandler(error, isFatal);
  }

  render() {
    console.log(this.state.isLoadingComplete);
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      console.log('entered');

      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    console.log('finished loading');

    activateKeepAwake();

    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </View>
    );
  }

  _cacheResourcesAsync = async () => {
    try {
      const imageAssets = cacheImages([
        require('./assets/images/fond-bleu-vague-1980x1980.jpg'),
        require('./assets/images/jeu-du-haka-logo-200x200.png'),
        require('./assets/videoplayer/thumb.png'),
        require('./assets/videoplayer/track.png'),
      ]);

      const fontAssets = cacheFonts([
        //Foundation used by videoplayer
        Ionicons.font,
        Foundation.font,
        MaterialIcons.font,
        Entypo.font,
        {
          'charcuterie-sans-inline': require('./assets/fonts/CharcuterieSansInline-Regular.ttf'),
          'european-pi-one': require('./assets/fonts/EuropeanPiOne-Regular.ttf'),
        },
      ]);

      await Promise.all([store.rehydrateAsync(), _loadSoundAsync(), ...imageAssets, ...fontAssets]);
      // this.setState({ isLoadingComplete: true });
    } catch (e) {
      console.log('Error downloading assets', e);
      // Sentry.captureException(e);
    }

    // this._downloadManager = new DownloadManager(store);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
    // Sentry.captureException(e);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
    console.log('finished _handleFinishLoading');
  };
}
//to use storybook
//uncomment this line and run `yarn run storybook`
// export default from './storybook';
export default App;
