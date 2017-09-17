import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const ChooseCardText = ({ currentDeck, style }) => {
  let text = '';

  switch (currentDeck) {
    case 'red':
      text = '1. AVOIR';
      break;
    case 'orange':
      text = '2. FAIRE';
      break;
    case 'green':
      text = '3. ETRE';
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
