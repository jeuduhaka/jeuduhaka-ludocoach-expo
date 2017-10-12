import React from '/utils/enhancedReact';
import PropTypes from 'prop-types';
import {
  Text,
  Image,
  View,
  TouchableHighlight,
  Linking,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import TouchableItem from 'react-navigation/src/views/TouchableItem';

import I18n from '../i18n/';

import GiftCardsScreen from '../screens/GiftCardsScreen';
import GamesListScreen from '../screens/GamesListScreen';
import AuthorsScreen from '../screens/AuthorsScreen';
import AdviceScreen from '../screens/AdviceScreen';
import GameGoalScreen from '../screens/GameGoalScreen';
import ThanksScreen from '../screens/ThanksScreen';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen3Moves from '../screens/SecondScreen3Moves';
import SecondScreen1Move from '../screens/SecondScreen1Move';
import DeckScreen from '../screens/DeckScreen';
import ChooseCardGridScreen from '../screens/ChooseCardGridScreen';
import ConfirmCardScreen from '../screens/ConfirmCardScreen';
import VideoScreen from '../screens/VideoScreen';
import FinalScreen from '../screens/FinalScreen';
import AfterCardsScreen from '../screens/AfterCardsScreen';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const mainScreenNavigatorConfig = {
  swipeEnabled: false,
  initialRouteName: 'Home',
  headerMode: 'none',
  transitionConfig: noTransitionConfig,
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  label: {
    color: '#014DA2',
    margin: 16,
    fontWeight: 'bold',
  },
});

const HomeWithDrawer = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    GameGoal: {
      screen: GameGoalScreen,
    },
    Advice: {
      screen: AdviceScreen,
    },
    // GiftCardsScreen: {
    //   screen: GiftCardsScreen,
    // },
    Authors: {
      screen: AuthorsScreen,
    },
    GamesList: {
      screen: GamesListScreen,
    },
    Thanks: {
      screen: ThanksScreen,
    },
  },
  {
    headerMode: 'none',
    gesturesEnabled: false,
    contentComponent: props => {
      // const allProps = {
      //   ...props,
      //   language: I18n.locale
      // };

      return (
        <Image
          style={{
            flex: 1,
            resizeMode: 'cover',
            width: undefined,
            height: undefined,
          }}
          source={require('../assets/images/motif-estime-de-soi-alpha-0.1.png')}>
          <ScrollView
            style={{ flex: 1, backgroundColor: 'rgba(247, 148, 28, 0.5)' }}>
            <Image
              style={{
                alignSelf: 'center',
                marginTop: 10,
                width: 100,
                height: 100,
                opacity: 1,
              }}
              source={require('../assets/images/jeu-du-haka-logo-200x200.png')}
            />
            <DrawerItems {...props} />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <TouchableItem
                onPress={() => Linking.openURL('https://www.jeuduhaka.com')}
                delayPressIn={0}>
                <View style={[styles.item]}>
                  <Text style={[styles.label]}>www.jeuduhaka.com</Text>
                </View>
              </TouchableItem>
              <TouchableItem
                onPress={() => Linking.openURL('http://www.marckucharz.com')}
                delayPressIn={0}>
                <View style={[styles.item]}>
                  <Text style={[styles.label]}>www.marckucharz.com</Text>
                </View>
              </TouchableItem>
              <TouchableItem
                onPress={() => Linking.openURL('http://www.ludocoaching.com')}
                delayPressIn={0}>
                <View style={[styles.item]}>
                  <Text style={[styles.label]}>www.ludocoaching.com</Text>
                </View>
              </TouchableItem>
              <TouchableItem
                onPress={() =>
                  Linking.openURL('https://www.facebook.com/jeuduhaka')}
                delayPressIn={0}>
                <View style={[styles.item, { alignSelf: 'center' }]}>
                  <Entypo
                    name={'facebook'}
                    size={36}
                    color={'#014DA2'}
                    style={{
                      textAlign: 'center',
                      backgroundColor: 'transparent',
                    }}
                  />
                </View>
              </TouchableItem>
              <View style={[styles.item]}>
                <Text
                  style={[
                    styles.label,
                    { color: '#666666', fontWeight: 'normal', fontSize: 12 },
                  ]}>
                  {I18n.t('developedBy')} Florent Roques
                </Text>
              </View>
            </View>
          </ScrollView>
        </Image>
      );
    },
  }
);

export const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeWithDrawer },
    Second3Moves: { screen: SecondScreen3Moves },
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
      }),
    },
  },
  mainScreenNavigatorConfig
);
