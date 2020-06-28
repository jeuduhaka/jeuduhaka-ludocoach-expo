import React from 'react';
import {
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

const { height, width } = Dimensions.get('window');

function createImage({
  source,
  imageStyle,
}: {
  source: any;
  imageStyle: Array<StyleProp<ViewStyle>>;
}) {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={{ ...styles.baseImageStyle, ...imageStyle }}
        source={source}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Estime de soi</Text>
        </View>
      </Image>
    </View>
  );
}

const CardBack = ({
  name,
  imageSource,
  onPress,
  ...otherProps
}: {
  name: string;
  // TODO specify any
  imageSource: any;
  onPress: (_: string) => {};
}) => {
  const buttonOnPress = () => {
    onPress(name);
  };

  const image = createImage({
    source: imageSource,
    // TODO better condition
    imageStyle: otherProps.style ? otherProps.style.imageStyle : null,
  });

  if (!onPress) {
    return image;
  }

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.buttonContainer} onPress={buttonOnPress}>
        {image}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    // width: width * 0.5,
    height: height * 0.5,
  },
  buttonContainer: {
    flex: 1,
    //backgroundColor needed for Android -> black by default
    backgroundColor: 'transparent',
    // backgroundColor: 'yellow'
    // padding: 10
  },
  imageContainer: {
    flex: 7 / 10,
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  //disable parent View justifyContent and alignItems properties
  // to get fullscreen image
  baseImageStyle: {
    // alignSelf: 'stretch',
    // flexGrow: 1,
    // justifyContent: 'space-between',
    width: width * 0.5,
    height: 500,
    flexDirection: 'column',
    resizeMode: 'contain',
    // width: width * 0.85,
    backgroundColor: 'orange',
    alignItems: 'center',
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
    width: width * 0.5,
  },
  title: {
    flex: 2 / 9,
    // color: colors.black,
    color: '#ffffff',
    fontFamily: 'charcuterie-sans-inline',
    fontSize: 20,
    letterSpacing: 0.5,
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default CardBack;