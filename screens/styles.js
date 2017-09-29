import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
  navigationHeader: { flex: 1 / 14 },
  contentContainer: { flex: 12 / 14 },
  titleContainer: {
    flex: 1.25,
  },
  navigationHeaderPaddingTop: {
    paddingTop: 50,
  },
  title: {
    fontSize: width * 0.14,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  font20px: {
    fontSize: 20,
  },
  subtitleContainer: {
    flex: 1,
  },
  subtitle: {
    fontSize: width * 0.07,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  homeImageContainer: {
    flex: 6,
  },
  homeImage: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  homeActionButton: {
    paddingTop: 5,
  },
  startButtonContainer: { flex: 4 },
  copyrightContainer: {
    flex: 1,
    paddingTop: 10,
    // borderWidth: 1,
    // borderColor: 'yellow',
  },
  copyright: {
    fontSize: width * 0.04,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
});
