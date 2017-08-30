import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 20;

export default StyleSheet.create({
    slideInnerContainer: {
        flex: 1,
        width: itemWidth,
        height: undefined,
        // paddingHorizontal: itemHorizontalMargin,
        // backgroundColor: 'darkblue' //debugging purpose
        // paddingBottom: 18 // needed for shadow
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'white',
        // borderTopLeftRadius: entryBorderRadius,
        // borderTopRightRadius: entryBorderRadius,
        // borderBottomLeftRadius: entryBorderRadius,
        // borderBottomRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        // backgroundColor: colors.black
    },
    image: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignSelf: 'stretch',
        width: itemWidth,
        // height: undefined,
        resizeMode: 'contain',
        borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on ios; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: colors.black
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 25,
      // backgroundColor: 'rgba(255,0,0,0.3)',
      backgroundColor: 'transparent',
    },
    title: {
        // color: colors.black,
        color: '#ffffff',
        fontSize: 37,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },

    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 12,
        fontStyle: 'italic'
    },
});
