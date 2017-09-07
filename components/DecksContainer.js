import React from 'react';
import { View } from 'react-native';

const DecksContainer = props => {
  const style = Object.assign({}, styles.cardsContainerStyle, props.style);

  return <View style={style}>{props.children}</View>;
};

const styles = {
  cardsContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
};

export default DecksContainer;
