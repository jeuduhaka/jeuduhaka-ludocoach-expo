import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableHighlight,
  Linking,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import {
  addNavigationHelpers,
  TabNavigator,
  DrawerNavigator,
  StackNavigator,
  DrawerItems
} from 'react-navigation';
import TouchableItem from 'react-navigation/src/views/TouchableItem';

import ThanksScreen from '../screens/ThanksScreen';
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

const mainScreenNavigatorConfig = {
  navigationOptions: {
    drawerLabel: 'Retour au jeu',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="videogame-asset"
        size={24}
        style={{ color: tintColor }}
      />
    )
  },
  swipeEnabled: false,
  initialRouteName: 'First',
  headerMode: 'none',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0
      // easing: Easing.out(Easing.poly(4)),
      // timing: Animated.timing,
    }
  })
};

const GameNavigator = StackNavigator(
  {
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
  },
  mainScreenNavigatorConfig
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center'
  },
  label: {
    margin: 16,
    fontWeight: 'bold'
  }
});

export const AppNavigator = DrawerNavigator(
  {
    Home: {
      screen: GameNavigator
    },
    Thanks: {
      screen: ThanksScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    gesturesEnabled: false,
    contentComponent: props => {
      return (
        <View style={{ flex: 1 }}>
          <DrawerItems {...props} />
          <TouchableItem
            onPress={() => Linking.openURL('https://www.jeuduhaka.com')}
            delayPressIn={0}
          >
            <View style={[styles.item]}>
              <Text style={[styles.label]}>www.jeuduhaka.com</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => Linking.openURL('http://www.marckucharz.com')}
            delayPressIn={0}
          >
            <View style={[styles.item]}>
              <Text style={[styles.label]}>www.marckucharz.com</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => Linking.openURL('http://www.ludocoaching.com')}
            delayPressIn={0}
          >
            <View style={[styles.item]}>
              <Text style={[styles.label]}>www.ludocoaching.com</Text>
            </View>
          </TouchableItem>
        </View>
      );
    }
  }
);

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
