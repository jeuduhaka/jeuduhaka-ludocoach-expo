import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  listContainer: {
    flex: 1
  },
  listRowContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth
    // backgroundColor: 'red'
  },
  listRowButton: {
    flex: 1
  },
  listRowText: {
    fontSize: 20
  }
});
