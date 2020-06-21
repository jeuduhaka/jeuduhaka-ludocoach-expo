import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Share,
  ActionSheetIOS,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Button } from '../components/common';
import BackgroundWave from '../components/BackgroundWave';
import MenuButton from '../components/MenuButton';
import BackButton from '../components/BackButton';
import i18n from '../i18n';
import carouselStyles, { colors } from '../components/CardCarousel/index.style';
import sliderEntryStyles, {
  sliderWidth,
  itemWidth,
} from '../components/CarouselSliderEntryTextOnImage/SliderEntryTextOnImage.style';
import cardImageSources from '../stores/CardImageSources';

const shareFailureCallback = (error: Error) => {
  __DEV__ && console.log('sharing failed');
};

const shareSuccessCallback = (success: boolean, method: string) => {
  // let text;
  // if (success) {
  //   text = `Shared via ${method}`;
  // } else {
  //   text = "You didn't share";
  // }
  // this.setState({ text });

  __DEV__ && console.log('sharing succeeded');
};

class SendGiftCardGalleryScreen extends React.Component {
  // TODO specify any
  constructor(props: any) {
    super(props);
    this.state = {
      activeSlide: 0,
      cardGiftsEntries: Object.entries(cardImageSources.gifts[i18n.locale]),
    };
  }

  _renderItem({
    item,
  }: {
    // TODO specify any
    item: [any, any];
  }) {
    const [, value] = item;
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

    const language = i18n.locale.split('-')[0].toLowerCase();

    if (Platform.OS === 'ios') {
      ActionSheetIOS.showShareActionSheetWithOptions(
        {
          // url: Expo.Asset.fromModule(
          //   require('../assets/images/iphone-jeu-du-haka.png')
          // ).uri,
          subject: `${i18n.t('giftCard')} ${i18n.t(currentGiftCardName)}`,
          message: i18n.t('findManaWithGiftCard'),
          url: `https://www.jeuduhaka.com/gift/${language}/${currentGiftCardName}`,
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
          title: `${i18n.t('giftCard')} ${i18n.t(currentGiftCardName)}`,
          message:
            i18n.t('findManaWithGiftCard') +
            `https://www.jeuduhaka.com/gift/${language}/${currentGiftCardName}`,
        },
        {}
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <BackButton tintColor={'#014DA2'} />
        <BackgroundWave>
          <ScrollView
            horizontal
            style={carouselStyles.scrollview}
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
                ref={(c) => {
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
                onSnapToItem={(index: number) => {
                  this.setState({ activeSlide: index });
                }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flex: 1 / 3,
              // backgroundColor: 'orange'
            }}>
            <Button onPress={this.sendCard}>
              {i18n.t('sendThisGiftCard')}
            </Button>
          </View>
        </BackgroundWave>
      </View>
    );
  }
}

export default SendGiftCardGalleryScreen;
