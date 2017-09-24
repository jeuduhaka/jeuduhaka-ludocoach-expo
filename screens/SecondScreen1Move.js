import React from 'react';

import I18n from '../i18n';
import SecondScreen from './SecondScreen';

export default ({ navigation }) => (
  <SecondScreen
    textContent={[I18n.t('oneMoveDescription'), ' ']}
    buttonOnPress={() => navigation.navigate('ChooseCardGrid')}
  />
);
