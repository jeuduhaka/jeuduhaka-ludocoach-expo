import React from 'react';
import {
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
  View
} from 'react-native';
// import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
//
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
  // const { width, height } = resolveAssetSource(source);
  // console.log(resolveAssetSource(source));

  return (
    <Animated.Image
      style={{ ...styles.baseImageStyle, ...imageStyle }}
      source={source}
      onError={error => {
        console.log(error);
        console.log('onError');
      }}
      // onLoad={() => console.log('onLoad')}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </Animated.Image>
  );
}

const Card = ({ imageSource, onPress, ...otherProps }) => {
  const rowPressed = () => {
    props.onPress(props.id);
  };

  const image = createImage({
    source: imageSource,
    name: otherProps.name,
    imageStyle: otherProps.style ? otherProps.style.imageStyle : null
  });

  if (!onPress) {
    return image;
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      {image}
    </TouchableOpacity>
  );
};

const styles = {
  buttonContainer: {
    flex: 1,
    //backgroundColor needed for Android -> black by default
    backgroundColor: 'transparent'
    // padding: 10
  },
  //disable parent View justifyContent and alignItems properties
  // to get fullscreen image
  baseImageStyle: {
    resizeMode: 'contain',
    flex: 1,
    // alignSelf: 'stretch',
    // flexGrow: 1,
    width: undefined,
    height: undefined
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: '10%',
    // backgroundColor: 'rgba(255,0,0,0.3)',
    backgroundColor: 'transparent'
  },
  title: {
    // color: colors.black,
    color: '#ffffff',
    fontFamily: 'charcuterie-sans-inline',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5
  }
};

export default Card;
