import React from 'react';
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
  BackHandler,
} from 'react-native';
import { connect } from 'react-redux';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import {
  addNavigationHelpers,
  NavigationActions,
  TabNavigator,
  DrawerNavigator,
  StackNavigator,
  DrawerItems,
} from 'react-navigation';
import TouchableItem from 'react-navigation/src/views/TouchableItem';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import I18n from '../i18n/';

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
    Thanks: {
      screen: ThanksScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    gesturesEnabled: false,
    contentComponent: props => {
      // const allProps = {
      //   ...props,
      //   language: I18n.locale
      // };

      return (
        <View style={{ flex: 1 }}>
          <Image
            style={{
              alignSelf: 'center',
              marginTop: 10,
              width: 100,
              height: 100,
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
              <View style={[styles.item, { justifyContent: 'center' }]}>
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
          </View>
        </View>
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

//ref https://reactnavigation.org/docs/guides/redux#Handling-the-Hardware-Back-Button-in-Android
class AppWithNavigationState extends React.Component {
  constructor(props) {
    super(props);

    this.onBackPress = this.onBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress() {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    dispatch(UndoActionCreators.undo());
    return true;
  }

  render() {
    const { dispatch, nav, language } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
    });

    return <AppNavigator navigation={navigation} screenProps={{ language }} />;
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
  language: state.language,
});

export default connect(mapStateToProps)(AppWithNavigationState);
