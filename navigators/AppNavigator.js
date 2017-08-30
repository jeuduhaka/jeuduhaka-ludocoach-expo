import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
  addNavigationHelpers,
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import RedScreen from '../screens/RedScreen';
import OrangeScreen from '../screens/OrangeScreen';
import GreenScreen from '../screens/GreenScreen';
import VideoScreen from '../screens/VideoScreen';

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
    activeTintColor: '#e91e63'
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
MainScreenNavigator.navigationOptions = {
  title: 'Ludocoach'
};

export const AppNavigator = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: ({ navigation }) => ({
      // headerLeft: <Text nav={navigation}>Menu</Text>
    })
  },
  Video: {
    path: 'video/:card',
    screen: VideoScreen,
    navigationOptions: ({ navigation }) => {
      console.log(navigation.state.params);
      return {
        headerTitle: navigation.state.params.videoName
      };
    }
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
