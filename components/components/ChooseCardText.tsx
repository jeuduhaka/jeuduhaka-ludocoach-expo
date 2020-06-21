import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewProps } from 'react-native';
import { connect } from 'react-redux';

const ChooseCardText = ({
  currentDeck,
  style,
}: {
  currentDeck: string;
  style: StyleProp<ViewProps>;
}) => {
  let text = '';

  switch (currentDeck) {
    case 'red':
      text = "Comment arrêter d'AVOIR l'émotion limitante de…?";
      break;
    case 'orange':
      text = '« YAKA » FAIRE…';
      break;
    case 'green':
      text = 'Pour réussir à ÊTRE soi-même en…';
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
  },
});

// state refers to the "current state" of your store.
// TODO specify any
const mapStateToProps = (state: any) => ({
  currentDeck: state.cards.currentDeck,
});

export default connect(mapStateToProps)(ChooseCardText);
