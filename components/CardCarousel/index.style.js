import { StyleSheet } from 'react-native';

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#550000',
  background2: '#FF0000',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollview: {
    flex: 2 / 5,
    // paddingTop: 50,
    // backgroundColor: 'blue',
  },
  scrollviewContentContainer: {
    flex: 1,
    flexDirection: 'column',
    // alignSelf: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 100,
    // backgroundColor: 'grey'
  },
  exampleContainer: {
    flex: 9,
    marginBottom: 30,
  },
  title: {
    flex: 1,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 5,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  slider: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  sliderContentContainer: {
    height: 700,
    // alignItems: 'center',
    alignSelf: 'center',
    // paddingBottom: '50%',
    // justifyContent: 'center',
  },
  paginationContainer: {
    flex: 1,
    paddingVertical: 30,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});
