import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import i18n from '../i18n';
import SecondScreen from './SecondScreen';
import { secondScreen3MovesPassed } from '../actions';
import { useNavigation } from '@react-navigation/native';
import { GAME_MODE_3_MOVES } from '../actions/types';

const SecondScreen3Moves = () => {
  const navigation = useNavigation();

  return (
    <SecondScreen
      textContent={[
        i18n.t('chooseCards'),
        ' ',
        <Text key="text-1" style={{ color: '#B8282E' }}>
          1.{i18n.t('having')}
        </Text>,
        ' ',
        <Text key="text-2" style={{ color: '#F7941C' }}>
          2.{i18n.t('doing')}
        </Text>,
        ' ',
        <Text key="text-3" style={{ color: '#39B549' }}>
          3.{i18n.t('being')}
        </Text>,
      ]}
      buttonOnPress={() => {
        navigation.navigate('ChooseCardGrid', {
          gameMode: GAME_MODE_3_MOVES,
          currentDeck: 'red',
          selectedCards: {
            red: '',
            orange: '',
            green: '',
          },
        });
      }}
    />
  );
};

export { SecondScreen3Moves };
