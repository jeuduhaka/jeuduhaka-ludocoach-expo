import React from 'react';
import {
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

// TODO remove any
function createImage({
  source,
  imageStyle,
}: {
  source: any;
  imageStyle: Array<StyleProp<ViewStyle>>;
}) {
  return (
    <Image
      style={{ ...styles.baseImageStyle, ...imageStyle }}
      source={source}
    />
  );
}

const CardBack = ({
  name,
  imageSource,
  onPress,
  ...otherProps
}: {
  name: string;
  imageSource: any;
  onPress: (_: string) => {};
}) => {
  const buttonOnPress = () => {
    onPress(name);
  };

  const image = createImage({
    source: imageSource,
    // TODO better condition
    imageStyle: 'style' in otherProps ? otherProps.style.imageStyle : null,
  });

  if (!onPress) {
    return image;
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={buttonOnPress}>
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
    width: undefined,
    // height: undefined
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
