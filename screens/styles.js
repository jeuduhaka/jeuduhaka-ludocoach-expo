import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
  },
  titleContainer: {
    flex: 1,
    paddingTop: '5%'
  },
  navigationHeaderPaddingTop: {
    paddingTop: 50
  },
  title: {
    fontSize: 40,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  font20px: {
    fontSize: 20
  },
  subtitleContainer: {
    flex: 1
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  homeImageContainer: {
    flex: 6
  },
  homeImage: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  startButtonContainer: { flex: 1 },
  copyrightContainer: { flex: 1, paddingTop: '5%' },
  copyright: { backgroundColor: 'transparent', alignSelf: 'center' }
});
