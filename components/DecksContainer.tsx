import React from 'react';
import { View, StyleSheet } from 'react-native';

// TODO specify any
const DecksContainer = (props: any) => {
  const style = Object.assign({}, styles.cardsContainerStyle, props.style);

  return <View style={style}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardsContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default DecksContainer;
