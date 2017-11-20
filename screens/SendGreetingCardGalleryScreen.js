import React from '/utils/enhancedReact';
import {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Share,
  ActionSheetIOS,
  Dimensions,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Button } from '../components/common';
import BackgroundWave from '../components/BackgroundWave';
import MenuButton from '../components/MenuButton';
import I18n from '../i18n';
import carouselStyles, { colors } from '../components/CardCarousel/index.style';
import sliderEntryStyles, {
  sliderWidth,
  itemWidth,
} from '../components/CarouselSliderEntryTextOnImage/SliderEntryTextOnImage.style';
import cardImageSources from '../stores/CardImageSources';

const { width } = Dimensions.get('window');

const shareFailureCallback = error => {
  __DEV__ && console.log('sharing failed');
};

const shareSuccessCallback = (success, method) => {
  // let text;
  // if (success) {
  //   text = `Shared via ${method}`;
  // } else {
  //   text = "You didn't share";
  // }
  // this.setState({ text });

  __DEV__ && console.log('sharing succeeded');
};

class SendGreetingCardGalleryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      cardGiftsEntries: Object.entries(cardImageSources.gifts[I18n.locale]),
    };
  }

  _renderItem({ item, index }) {
    const [key, value] = item;
    // console.log(item);

    return (
      <View style={sliderEntryStyles.slideInnerContainer}>
        {/* <View style={sliderEntryStyles.imageContainer}> */}
        <Image source={value} style={sliderEntryStyles.image} />
        {/* </View> */}
      </View>
    );
  }

  sendCard = () => {
    const currentGiftCardName = this.state.cardGiftsEntries[
      this.state.activeSlide
    ][0];
    // console.log(currentGiftCardName);

    const language = I18n.locale.split('-')[0].toLowerCase();

    //TODO see to use only Share.share for both platforms
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showShareActionSheetWithOptions(
        {
          // url: Expo.Asset.fromModule(
          //   require('../assets/images/iphone-jeu-du-haka.png')
          // ).uri,
          message: `${I18n.t('greetingHappyNewYear')} ${I18n.t(
            'findManaWithGiftCard'
          )}`,
          url: `https://www.jeuduhaka.com/gift/newyear/${language}/${currentGiftCardName}`,
          excludedActivityTypes: [
            'com.apple.mobilenotes.SharingExtension',
            'com.google.Drive.ShareExtension',
            'com.apple.reminders.RemindersEditorExtension',
            'com.apple.mobileslideshow.StreamShareService',
          ],
        },
        shareFailureCallback,
        shareSuccessCallback
      );
    } else if (Platform.OS === 'android') {
      Share.share(
        {
          message: `${I18n.t('greetingHappyNewYear')} ${I18n.t(
            'findManaWithGiftCard'
          )}
            https://www.jeuduhaka.com/gift/newyear/${language}/${currentGiftCardName}`,
        },
        {}
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuButton
          onPress={() => {
            this.props.navigation.navigate('DrawerOpen');
          }}
        />
        <BackgroundWave>
          <View style={{ flex: 1 / 3, justifyContent: 'flex-end' }}>
            <Text
              style={{
                fontFamily: 'charcuterie-sans-inline',
                fontSize: width * 0.07,
                textAlign: 'center',
                color: '#014DA2',
                paddingTop: 10,
                paddingHorizontal: 10,
              }}>
              {I18n.t('greetingText')}
            </Text>
          </View>
          <ScrollView
            horizontal
            style={{ flex: 1 / 3 }}
            contentContainerStyle={carouselStyles.scrollviewContentContainer}
            indicatorStyle={'white'}
            scrollEventThrottle={200}
            alwaysBounceVertical={false}
            alwaysBounceHorizontal={false}
            directionalLockEnabled
            //This setting is needed to block verticzl
            scrollEnabled={false}>
            <View style={carouselStyles.exampleContainer}>
              <Carousel
                ref={c => {
                  this._carousel = c;
                }}
                data={this.state.cardGiftsEntries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                containerCustomStyle={carouselStyles.slider}
                contentContainerCustomStyle={
                  carouselStyles.sliderContentContainer
                }
                lockScrollWhileSnapping
                loop
                onSnapToItem={index => {
                  this.setState({ activeSlide: index });
                }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flex: 1 / 3,
              // backgroundColor: 'orange',
            }}>
            <Button title="Envoyer" onPress={this.sendCard}>
              {I18n.t('sendThisGreetingCard')}
            </Button>
          </View>
        </BackgroundWave>
      </View>
    );
  }
}

export default SendGreetingCardGalleryScreen;
