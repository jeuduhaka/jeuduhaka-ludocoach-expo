import { StyleSheet } from 'react-native';

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  darkred: '#550000',
  background2: '#FF0000',
};

export default StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    flex: 1,
  },
  listRowContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'rgba(184, 40, 46, 0.1)',
    borderBottomColor: '#999',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listRowButton: {
    flex: 1,
  },
  listRowText: {
    fontSize: 16,
  },
  textRed: {
    color: '#B8282E',
  },
  textOrange: {
    color: '#F7941C',
  },
  textGreen: {
    color: '#39B549',
  },
});
