import { StyleSheet, Dimensions, TextStyle } from 'react-native';

const { height, width } = Dimensions.get('window');

const textStyle: TextStyle = {
  fontSize: width * 0.07,
  color: '#014DA2',
  backgroundColor: 'transparent',
  textAlign: 'center',
};

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
    flex: 1 / 10,
  },
  intermediateScreenTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backgroundOpacity: {
    position: 'absolute',
    opacity: 0.3,
    width,
    height,
    top: 0,
    left: 0,
  },
  nextButtonContainer: {
    marginTop: 20,
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
    flex: 1 / 10,
  },
  subtitle: {
    ...textStyle,
    fontFamily: 'charcuterie-sans-inline',
  },
  intermediateScreenText: {
    ...textStyle,
  },
  homeImageContainer: {
    flex: 5 / 10,
  },
  homeImage: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  homeActionButton: {
    paddingTop: 5,
  },
  mantraContainer: {
    flex: 1 / 10,
  },
  startButtonContainer: { flex: 2 / 10 },
  copyrightContainer: {
    flex: 1 / 10,
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
