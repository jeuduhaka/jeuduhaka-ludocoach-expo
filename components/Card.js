import React from '/utils/enhancedReact';
import {
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
  View,
} from 'react-native';
import Layout from '../constants/Layout';
// import env from '../config/env';
//
//
// const spinValue = new Animated.Value(0);
//
// function spin() {
//   spinValue.setValue(0);
//   Animated.timing(
//     spinValue,
//     {
//       toValue: 1,
//       duration: 4000,
//       easing: Easing.linear
//     }
//   ).start(() => spin());
// }

function createImage({ name, source, imageStyle }) {
  return (
    <Image style={{ ...styles.baseImageStyle, ...imageStyle }} source={source}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </Image>
  );
}

const Card = ({ name, imageSource, onPress, ...otherProps }) => {
  const buttonOnPress = () => {
    onPress(name);
  };

  const image = createImage({
    source: imageSource,
    name,
    imageStyle: otherProps.style ? otherProps.style.imageStyle : null,
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

const styles = {
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
    fontSize: Layout.window.width * 0.27 / 5.5,
    letterSpacing: 0.5,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
};

export default Card;
