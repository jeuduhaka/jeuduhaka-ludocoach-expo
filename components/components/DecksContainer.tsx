import React from 'react';
import { View } from 'react-native';

// TODO specify any
const DecksContainer = (props: any) => {
  const style = Object.assign({}, styles.cardsContainerStyle, props.style);

  return <View style={style}>{props.children}</View>;
};

const styles = {
  cardsContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
};

export default DecksContainer;
