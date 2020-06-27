import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  CardDeckName,
  GreenCardName,
  OrangeCardName,
  RedCardName,
  CardName,
  AssetsSources,
  SelectedCards,
} from '../types';

import CustomDrawerContentComponent from '../components/CustomDrawerContentComponent';

import GiftCardsScreen from '../screens/GiftCardsScreen';
import SendGiftCardGalleryScreen from '../screens/SendGiftCardGalleryScreen';
import SendGreetingCardGalleryScreen from '../screens/SendGreetingCardGalleryScreen';
import GamesListScreen from '../screens/GamesListScreen';
import AuthorsScreen from '../screens/AuthorsScreen';
import AdviceScreen from '../screens/AdviceScreen';
import GameGoalScreen from '../screens/GameGoalScreen';
import ThanksScreen from '../screens/ThanksScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { SecondScreen3Moves } from '../screens/SecondScreen3Moves';
import { SecondScreen1Move } from '../screens/SecondScreen1Move';
import DeckScreen from '../screens/DeckScreen';
import { ChooseCardGridScreen } from '../screens/ChooseCardGridScreen';
import ConfirmCardScreen from '../screens/ConfirmCardScreen';
import { VideoScreen } from '../screens/VideoScreen';
import FinalScreen from '../screens/FinalScreen';
import AfterCardsScreen from '../screens/AfterCardsScreen';

export type RootStackParamList = {
  Home: {};
  GameGoal: {};
  SecondScreen1Move: {};
  SecondScreen3Moves: {};
  ChooseCardGrid: {
    gameMode: string;
    currentDeck: CardDeckName;
    allCardsChosen?: boolean;
    cardConfirmed?: boolean;
  };
  Video: {
    gameMode: string;
    currentDeck: CardDeckName;
    cardName: CardName;
  };
};

function GiftsCardsStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen name="Intro" component={GiftCardsScreen} />
      <Stack.Screen
        name="SendGiftCardGallery"
        component={SendGiftCardGalleryScreen}
      />
    </Stack.Navigator>
  );
}

function HomeWithDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContentComponent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="GameGoal" component={GameGoalScreen} />
      <Drawer.Screen name="Advice" component={AdviceScreen} />
      <Drawer.Screen name="GiftCards" component={GiftsCardsStack} />
      <Drawer.Screen
        name="SendGreetingCard"
        component={SendGreetingCardGalleryScreen}
      />
      <Drawer.Screen name="Authors" component={AuthorsScreen} />
      <Drawer.Screen name="GamesList" component={GamesListScreen} />
      <Drawer.Screen name="Thanks" component={ThanksScreen} />
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeWithDrawer"
      headerMode="none"
      screenOptions={{
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 0,
              easing: Easing.step0,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 0,
              easing: Easing.step0,
            },
          },
        },
      }}>
      <Stack.Screen name="HomeWithDrawer" component={HomeWithDrawer} />
      <Stack.Screen name="Second3Moves" component={SecondScreen3Moves} />
      <Stack.Screen name="Second1Move" component={SecondScreen1Move} />
      <Stack.Screen name="Final" component={FinalScreen} />
      <Stack.Screen name="Deck" component={DeckScreen} />
      <Stack.Screen name="ChooseCardGrid" component={ChooseCardGridScreen} />
      <Stack.Screen name="ConfirmCard" component={ConfirmCardScreen} />
      <Stack.Screen name="AfterCards" component={AfterCardsScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
    </Stack.Navigator>
  );
}

export { AppNavigator };
