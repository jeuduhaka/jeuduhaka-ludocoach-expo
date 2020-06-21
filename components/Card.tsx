import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import Layout from '../constants/Layout';

function createImage({
  name,
  source,
  imageStyle,
}: {
  name: string;
  source: any;
  imageStyle: Array<StyleProp<ViewStyle>>;
}) {
  return (
    <ImageBackground
      style={{ ...styles.baseImageStyle, ...imageStyle }}
      source={source}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </ImageBackground>
  );
}

const Card = ({
  name,
  imageSource,
  onPress,
  ...otherProps
}: {
  name: string;
  imageSource: any;
  onPress: (_: string) => void;
}) => {
  const buttonOnPress = () => {
    onPress(name);
  };

  const image = createImage({
    source: imageSource,
    name,
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
    height: undefined,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    // flexDirection: 'column',
    // flexWrap: 'nowrap',
    flexGrow: 1,
    // flexShrink: 1,
    overflow: 'scroll',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(255,0,0,0.3)'
    backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: 'yellow',
    width: Layout.window.width * 0.28,
  },
  title: {
    flex: 2 / 9,
    // color: colors.black,
    color: '#ffffff',
    fontFamily: 'charcuterie-sans-inline',
    fontSize: (Layout.window.width * 0.27) / 5.5,
    letterSpacing: 0.5,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
});

export default Card;
