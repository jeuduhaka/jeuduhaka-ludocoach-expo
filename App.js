import React from 'react';
import {
  View,
  //   Image,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';

import Expo, { Font } from 'expo';

import AppWithNavigationState from './navigators/AppNavigator';
import configureStore from './config/configureStore';

const store = configureStore();

class App extends React.Component {
  state = {
    appIsReady: false
  };

  componentWillMount() {
    try {
      this._getLanguage();
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

  async _getLanguage() {
    try {
      const locale = await Expo.Util.getCurrentLocaleAsync();
      console.log(locale);
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
