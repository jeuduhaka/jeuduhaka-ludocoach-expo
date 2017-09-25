import React from '/utils/enhancedReact';
import { View } from 'react-native';

const RowCards = props => {
  const style = Object.assign({}, styles.cardsContainerStyle, props.style);

  return <View style={style}>{props.children}</View>;
};

const styles = {
  cardsContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
};

export default RowCards;
