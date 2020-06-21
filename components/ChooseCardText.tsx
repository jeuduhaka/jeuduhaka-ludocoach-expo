import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StyleProp,
  ViewProps,
} from 'react-native';

import i18n from '../i18n';

const { width } = Dimensions.get('window');

const ChooseCardText = ({
  currentDeck,
  style,
}: {
  currentDeck: string;
  style?: StyleProp<ViewProps>;
}) => {
  let text = '';

  switch (currentDeck) {
    case 'red':
      text = `1. ${i18n.t('having')}`;
      break;
    case 'orange':
      text = `2. ${i18n.t('doing')}`;
      break;
    case 'green':
      text = `3. ${i18n.t('being')}`;
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

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFF',
    fontSize: width * 0.1,
    fontFamily: 'charcuterie-sans-inline',
  },
});

export default ChooseCardText;
