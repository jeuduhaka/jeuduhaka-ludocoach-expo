import React from '/utilities/enhancedReact';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../i18n';

const ChooseCardText = ({ currentDeck, style }) => {
  let text = '';

  switch (currentDeck) {
    case 'red':
      text = `1. ${I18n.t('having')}`;
      break;
    case 'orange':
      text = `2. ${I18n.t('doing')}`;
      break;
    case 'green':
      text = `3. ${I18n.t('being')}`;
      break;
    default:
  }

  Object.assign(styles.containerStyle, style);

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: '#FFF'
  }
};

export default ChooseCardText;
