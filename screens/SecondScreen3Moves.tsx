import React from 'react';
import { Text } from 'react-native';

import SecondScreen from './SecondScreen';
import { RouteProp } from '@react-navigation/native';
import { GAME_MODE_3_MOVES } from '../actions/types';
import { RootStackParamList } from '../navigators/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type SecondScreen3MovesRouteProp = RouteProp<
  RootStackParamList,
  'SecondScreen3Moves'
>;
type SecondScreen3MovesNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SecondScreen3Moves'
>;

type Props = {
  route: SecondScreen3MovesRouteProp;
  navigation: SecondScreen3MovesNavigationProp;
};

function SecondScreen3Moves({ navigation }: Props) {
  const { t } = useTranslation();
  
  return (
    <SecondScreen
      textContent={[
        t('chooseCards'),
        ' ',
        <Text key="text-1" style={{ color: '#B8282E' }}>
          1.{t('having')}
        </Text>,
        ' ',
        <Text key="text-2" style={{ color: '#F7941C' }}>
          2.{t('doing')}
        </Text>,
        ' ',
        <Text key="text-3" style={{ color: '#39B549' }}>
          3.{t('being')}
        </Text>,
      ]}
      buttonOnPress={() => {
        navigation.push('ChooseCardGrid', {
          gameMode: GAME_MODE_3_MOVES,
          currentDeck: 'red',
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

export { SecondScreen3Moves };
