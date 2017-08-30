import React from 'react';
import {
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text
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
      // style={styles.image}
      style={{ ...styles.containerStyle, ...imageStyle }}
      source={source}
      onError={(error) => {
        console.log(error);
        console.log('onError');
      }}
      // onLoad={() => console.log('onLoad')}
    >
      {/* <Text style={{ color: 'white', width: 100, height: 100, backgroundColor: 'red'}}>{name}</Text> */}
    </Animated.Image>
  );
}

const Card = ({
  imageSource,
  onPress,
  ...otherProps,
}) => {
  const image = createImage({
    source: imageSource,
    imageStyle: otherProps.style ? otherProps.style.imageStyle : null
  });

  if (!onPress) {
    return image;
  }

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
    >
      {image}
    </TouchableOpacity>
  );
};

const styles = {
  buttonContainer: {
    flex: 1,
    //backgroundColor needed for Android -> black by default
    backgroundColor: 'transparent',
  },
  //disable parent View justifyContent and alignItems properties
  // to get fullscreen image
  image: {
    // flex: 1,
    // width: undefined,
    // height: undefined,
  },
  containerStyle: {
    // borderWidth: 1,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10,
    // height: 200,
    // width: 100,
    // width: 200,
    // height: 200,

    resizeMode: 'contain',
    flex: 1,
    width: undefined,
    // height: undefined,
  },
};

export default Card;
