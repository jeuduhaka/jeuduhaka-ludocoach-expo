import React, { useState } from 'react';
import {
  Image,
  View,
  Platform,
  Share,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

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

import styles2 from './styles';
import { RootStackParamList } from '../navigators/AppNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';
import { useTranslation } from 'react-i18next';

type GiftCardsScreenRouteProp = RouteProp<RootStackParamList, 'GiftCards'>;
type GiftCardsScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'GiftCards'
>;

type Props = {
  route: GiftCardsScreenRouteProp;
  navigation: GiftCardsScreenNavigationProp;
};



function SendGiftCardGalleryScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  // TODO fix type issue
  const cardGiftsEntries = Object.entries<number>(
    cardImageSources.gifts[i18n.language.split('-')[0].toLowerCase()]
  );

  function _renderItem({
    item,
  }: {
    // TODO specify any
    item: [any, any];
  }) {
    const [, value] = item;
    // console.log(item);

    return (
      // TODO better image rendering: add shadows? round image?
      <View style={sliderEntryStyles.slideInnerContainer}>
        {/* <View style={sliderEntryStyles.imageContainer}> */}
        <Image source={value} style={sliderEntryStyles.image} />
        {/* </View> */}
      </View>
    );
  }

  function sendCard() {
    // TODO update using expo-sharing
    console.log(cardGiftsEntries[activeSlide]);

    if (!cardGiftsEntries[activeSlide][1]) {
      // TODO
      return;
    }

    let cardFileLocalURI = Asset.fromModule(cardGiftsEntries[activeSlide][1])
      .localUri;
    if (!cardFileLocalURI) {
      // TODO
      return;
    }

    // TODO check sometimes not triggered, like assets not loaded or something (android)
    Sharing.shareAsync(cardFileLocalURI);
    return;
    const currentGiftCardName = cardGiftsEntries[activeSlide][0];

    const language = i18n.language.split('-')[0].toLowerCase();

    if (Platform.OS === 'ios') {

      ActionSheetIOS.showShareActionSheetWithOptions(
        {
          // url: Expo.Asset.fromModule(
          //   require('../assets/images/iphone-jeu-du-haka.png')
          // ).uri,
          subject: `${t('giftCard')} ${t(currentGiftCardName)}`,
          message: t('findManaWithGiftCard'),
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
          title: `${t('giftCard')} ${t(currentGiftCardName)}`,
          message:
            t('findManaWithGiftCard') +
            `https://www.jeuduhaka.com/gift/${language}/${currentGiftCardName}`,
        },
        {}
      );
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles2.backgroundImage}
        source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
        <View style={styles2.navigationHeader}>
          <BackButton tintColor={'#014DA2'} />
        </View>
        <View style={carouselStyles.exampleContainer}>
          <Carousel
            data={cardGiftsEntries}
            renderItem={_renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            containerCustomStyle={carouselStyles.slider}
            contentContainerCustomStyle={carouselStyles.sliderContentContainer}
            lockScrollWhileSnapping
            loop
            onSnapToItem={(index: number) => {
              setActiveSlide(index);
            }}
          />
        </View>
        <View
          style={{
            flex: 1 / 3,
            // backgroundColor: 'orange'
          }}>
          <Button onPress={sendCard}>{t('sendThisGiftCard')}</Button>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SendGiftCardGalleryScreen;
