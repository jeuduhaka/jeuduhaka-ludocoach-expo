import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import {
  MaterialIcons,
  Foundation,
  Ionicons,
  Entypo,
} from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { activateKeepAwake } from 'expo-keep-awake';
import { NavigationContainer } from '@react-navigation/native';

import './i18n';

import { AppNavigator } from './navigators/AppNavigator';
import configureStore from './config/configureStore';
import { cacheImages, cacheVideos, cacheFonts } from './utils/cacheAssetsAsync';

const store = configureStore();

async function _loadSoundAsync() {
  if (__DEV__) return;

  try {
    await Audio.Sound.createAsync(
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

class App extends React.Component<{
  skipLoadingScreen: boolean;
}> {
  state = {
    isLoadingComplete: false,
    store: null,
  };

  render() {
    console.log(
      `this.state.isLoadingComplete: ${this.state.isLoadingComplete}`
    );

    const handleFinishLoadingFunc = this._handleFinishLoading.bind(this);

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={handleFinishLoadingFunc}
        />
      );
    }

    console.log('finished loading');

    activateKeepAwake();

    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <Provider store={store}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </Provider>
      </View>
    );
  }

  async _cacheResourcesAsync() {
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

      await Promise.all([
        store.rehydrateAsync(),
        _loadSoundAsync(),
        ...imageAssets,
        ...fontAssets,
      ]);
      this.setState({ isLoadingComplete: true });
    } catch (e) {
      console.log('Error downloading assets', e);
      // Sentry.captureException(e);
    }

    // this._downloadManager = new DownloadManager(store);
  }

  _handleLoadingError = (error: any) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(`_handleLoadingError: ${error}`);
    // Sentry.captureException(e);
  };

  _handleFinishLoading() {
    try {
      this.setState({ isLoadingComplete: true });
      console.log('finished _handleFinishLoading');
    } catch (error) {
      console.warn(`_handleFinishLoading: ${error}`);
    }
  }
}
//to use storybook
//uncomment this line and run `yarn run storybook`
// export default from './storybook';
export default App;
