import React from 'react';
import {
  View,
  //   Image,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import Expo, { Font } from 'expo';
import I18n from 'ex-react-native-i18n';

import AppWithNavigationState from './navigators/AppNavigator';
import configureStore from './config/configureStore';

const store = configureStore();
// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

class App extends React.Component {
  state = {
    appIsReady: false
  };

  componentWillMount() {
    try {
      // this._getLanguage();
      this.initI18nAsync();
      this.loadSoundAsync();
      this._loadFontsAsync();
    } finally {
      // this.setState({ appIsReady: true });
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync({
      'charcuterie-sans-inline': require('./assets/fonts/CharcuterieSansInline-Regular.ttf'),
      ionicons: require('./assets/fonts/Ionicons.ttf')
    });
    this.setState({ appIsReady: true });
  }

  async initI18nAsync() {
    await I18n.initAsync();
  }

  async loadSoundAsync() {
    // if (__DEV__) return;

    try {
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

      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  async _getLanguage() {
    try {
      const locale = await Expo.Util.getCurrentLocaleAsync();
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    if (!this.state.appIsReady) {
      return <Expo.AppLoading />;
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
