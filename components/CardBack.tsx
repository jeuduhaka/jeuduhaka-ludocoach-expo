import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CardBack = ({
  imageSource,
  onPress,
  style,
}: {
  imageSource: number;
  onPress?: () => void;
  style: { imageStyle: any };
}) => {
  const image = (
    <Image
      style={{ ...styles.baseImageStyle, ...style.imageStyle }}
      source={imageSource}
    />
  );

  if (!onPress) {
    return image;
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      {image}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    //backgroundColor needed for Android -> black by default
    backgroundColor: 'transparent',
    // backgroundColor: 'yellow'
    // padding: 10
  },
  //disable parent View justifyContent and alignItems properties
  // to get fullscreen image
  baseImageStyle: {
    resizeMode: 'contain',
    flex: 1,
    // alignSelf: 'stretch',
    // flexGrow: 1,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    // flexWrap: 'nowrap',
    flexGrow: 1,
    flexShrink: 1,
    overflow: 'scroll',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(255,0,0,0.3)',
    backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: 'yellow'
  },
  title: {
    // color: colors.black,
    color: '#ffffff',
    fontFamily: 'charcuterie-sans-inline',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    bottom: '10%',
    // borderWidth: 1,
    // borderColor: 'blue'
  },
});

export default CardBack;
