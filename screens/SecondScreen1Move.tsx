import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import i18n from '../i18n';
import SecondScreen from './SecondScreen';
import { secondScreen1MovePassed } from '../actions';
import { useNavigation } from '@react-navigation/native';
import { GAME_MODE_1_MOVE } from '../actions/types';

const SecondScreen1Move = () => {
  const navigation = useNavigation();

  return (
    <SecondScreen
      textContent={i18n.t('oneMoveDescription')}
      buttonOnPress={() => {
        navigation.navigate('ChooseCardGrid', {
          gameMode: GAME_MODE_1_MOVE,
          currentDeck: 'green',
        });
      }}
    />
  );
};

export { SecondScreen1Move };
