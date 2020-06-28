import React from 'react';
import SecondScreen from './SecondScreen';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import i18n from '../i18n';
import { GAME_MODE_1_MOVE } from '../actions/types';
import { RootStackParamList } from '../navigators/AppNavigator';

type SecondScreen1MoveRouteProp = RouteProp<
  RootStackParamList,
  'SecondScreen3Moves'
>;
type SecondScreen1MoveNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SecondScreen3Moves'
>;

type Props = {
  route: SecondScreen1MoveRouteProp;
  navigation: SecondScreen1MoveNavigationProp;
};

function SecondScreen1Move({ navigation }: Props) {
  return (
    <SecondScreen
      textContent={i18n.t('oneMoveDescription')}
      buttonOnPress={() => {
        navigation.push('ChooseCardGrid', {
          gameMode: GAME_MODE_1_MOVE,
          currentDeck: 'green',
          selectedCards: {
            red: '',
            orange: '',
            green: '',
          },
          allCardsChosen: false,
        });
      }}
    />
  );
}

export { SecondScreen1Move };
