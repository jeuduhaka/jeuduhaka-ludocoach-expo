import { StyleSheet, Dimensions, TextStyle, Platform } from 'react-native';

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
  },
  navigationHeader: { flex: 1 / 14 },
  contentContainer: { flex: 12 / 14 },
  titleContainer: {
    flex: Platform.OS === 'web' ? 1.6 / 10 : 1.2 / 10,
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
    fontSize: Platform.OS === 'web' ? width * 0.07 : width * 0.14,
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
    fontSize: Platform.OS === 'web' ? width * 0.035 : width * 0.07,
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
    width: '100%',
    height: '100%'
  },
  homeActionButton: {
    paddingTop: 5,
  },
  mantraContainer: {
    flex: 1 / 10,
  },
  startButtonContainer: {
    flex: 2 / 10,
    alignSelf: Platform.OS === 'web' ? 'center' : 'auto',
    width: Platform.OS === 'web' ? width * 0.3 : 'auto'
  },
  copyrightContainer: {
    flex: 1 / 10,
    paddingTop: 10,
  },
  copyright: {
    fontSize: Platform.OS === 'web' ? width * 0.015 : width * 0.04,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
});
