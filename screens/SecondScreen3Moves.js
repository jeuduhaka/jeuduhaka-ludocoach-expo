import React from 'react';
import { Text, Image, Linking, View } from 'react-native';

import I18n from '../i18n';

import SecondScreen from './SecondScreen';

export default ({ navigation }) => (
  <SecondScreen
    textContent={[
      I18n.t('chooseCards'),
      ' ',
      <Text key="text-1" style={{ color: '#B8282E' }}>
        1.{I18n.t('having')}
      </Text>,
      ' ',
      <Text key="text-2" style={{ color: '#F7941C' }}>
        2.{I18n.t('doing')}
      </Text>,
      ' ',
      <Text key="text-3" style={{ color: '#39B549' }}>
        3.{I18n.t('being')}
      </Text>,
    ]}
    buttonOnPress={() => navigation.navigate('Deck')}
  />
);
