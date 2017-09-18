import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import {
  addNavigationHelpers,
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import SecondScreen1Move from '../screens/SecondScreen1Move';
import DeckScreen from '../screens/DeckScreen';
import ChooseCardGridScreen from '../screens/ChooseCardGridScreen';
import ConfirmCardScreen from '../screens/ConfirmCardScreen';
import RedScreen from '../screens/RedScreen';
import OrangeScreen from '../screens/OrangeScreen';
import GreenScreen from '../screens/GreenScreen';
import VideoScreen from '../screens/VideoScreen';
import FinalScreen from '../screens/FinalScreen';
import AfterCardsScreen from '../screens/AfterCardsScreen';

const routeConfigs = {
  Red: {
    screen: RedScreen
  },
  Orange: {
    screen: OrangeScreen
  },
  Green: {
    screen: GreenScreen
  }
};

const mainScreenNavigatorConfig = {
  swipeEnabled: true,
  initialRouteName: 'Red',
  headerMode: 'none',
  tabBarOptions: {
    activeTintColor: '#111',
    activeBackgroundColor: '#eee',
    labelStyle: {
      fontSize: 16,
      alignSelf: 'center'
    }
  },
  transitionConfig: () => ({
    transitionSpec: {
      // duration: 0
      // easing: Easing.out(Easing.poly(4)),
      // timing: Animated.timing,
    }
  })
};

const MainScreenNavigator = TabNavigator(
  routeConfigs,
  mainScreenNavigatorConfig
);

export const AppNavigator = StackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen },
  Second1Move: { screen: SecondScreen1Move },
  Final: { screen: FinalScreen },
  Deck: { screen: DeckScreen },
  ChooseCardGrid: { screen: ChooseCardGridScreen },
  ConfirmCard: { screen: ConfirmCardScreen },
  AfterCards: { screen: AfterCardsScreen },
  // Main: {
  //   screen: MainScreenNavigator,
  //   navigationOptions: ({ navigation }) => ({
  //     title: 'Ludocoach'
  //     // headerBackTitle: null
  //   })
  // },
  Video: {
    path: 'video/:card',
    screen: VideoScreen,
    // headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      // headerTitle: navigation.state.params.videoName
    })
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
