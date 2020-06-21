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
    // backgroundColor: colors.background1,
  },
  scrollview: {
    flex: 2 / 3,
    // backgroundColor: 'orange',
    // paddingTop: 50
  },
  scrollviewContentContainer: {
    flex: 1,
    // backgroundColor: 'orange',
    // paddingBottom: 50
  },
  exampleContainer: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 30
  },
  slider: {
    // backgroundColor: 'orange',
    // marginTop: 25,
  },
  sliderContentContainer: {
    // backgroundColor: 'orange',
    alignItems: 'center',
  },
});
