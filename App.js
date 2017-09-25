import React from '/utilities/enhancedReact';
import {
  View,
  //   Image,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { Provider } from 'react-redux';
import Expo, { Font, AppLoading } from 'expo';
import I18n from 'ex-react-native-i18n';
import { Ionicons } from '@expo/vector-icons';

import AppWithNavigationState from './navigators/AppNavigator';
import configureStore from './config/configureStore';

class App extends React.Component {
  static sound = new Expo.Audio.Sound();

  state = {
    isLoadingComplete: false,
  };

  async loadSoundAsync() {
    if (__DEV__) return;

    if (Platform.OS === 'ios') {
      try {
        // await soundObject.playAsync();

        const {
          soundObject,
          status,
        } = await Expo.Audio.Sound.create(
          require('./assets/sounds/normalized-tamtam-loop16bit-1min-volume-0.6.mp3'),
          {
            shouldPlay: true,
            isLooping: true,
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

    const store = configureStore({ language: I18n.locale });

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
          'charcuterie-sans-inline': require('./assets/fonts/CharcuterieSansInline-Regular.ttf'),
        },
      ]),
      this.loadSoundAsync(),
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
//to use storybook
//uncomment this line and run `yarn run storybook`
// export default from './storybook';
export default App;
