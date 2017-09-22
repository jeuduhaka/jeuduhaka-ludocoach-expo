import React from 'react';
import {
  View,
  //   Image,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import Expo, { Font, AppLoading } from 'expo';
import I18n from 'ex-react-native-i18n';
import { Ionicons } from '@expo/vector-icons';

import AppWithNavigationState from './navigators/AppNavigator';
import configureStore from './config/configureStore';

const store = configureStore();

class App extends React.Component {
  static sound = new Expo.Audio.Sound();

  state = {
    isLoadingComplete: false
  };

  async loadSoundAsync() {
    if (__DEV__) return;

    try {
      // await soundObject.playAsync();

      const {
        soundObject,
        status
      } = await Expo.Audio.Sound.create(
        require('./assets/sounds/normalized-tamtam-loop16bit-1min-volume-0.6.mp3'),
        {
          shouldPlay: true,
          isLooping: true
        }
      );

      // await App.sound.loadAsync(
      //   require('./assets/sounds/normalized-tamtam-loop16bit-1min-volume-0.6.mp3'),
      //   {
      //     shouldPlay: true,
      //     isLooping: true
      //   }
      // );
      //
      // await App.sound.playAsync();

      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </View>
    );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      I18n.initAsync(),
      Font.loadAsync([
        ...Ionicons.font,
        {
          'charcuterie-sans-inline': require('./assets/fonts/CharcuterieSansInline-Regular.ttf')
        }
      ]),
      this.loadSoundAsync()
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
