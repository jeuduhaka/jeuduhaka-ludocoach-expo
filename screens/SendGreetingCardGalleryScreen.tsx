import React, { useState } from 'react';
import {
  Text,
  Image,
  View,
  Platform,
  Share,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Button } from '../components/common';
import MenuButton from '../components/MenuButton';
import i18n from '../i18n';
import carouselStyles from '../components/CardCarousel/index.style';
import sliderEntryStyles, {
  sliderWidth,
  itemWidth,
} from '../components/CarouselSliderEntryTextOnImage/SliderEntryTextOnImage.style';
import cardImageSources from '../stores/CardImageSources';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/AppNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import styles2 from './styles';

const { width } = Dimensions.get('window');

const shareFailureCallback = (error) => {
  __DEV__ && console.log('sharing failed');
};

const shareSuccessCallback = (success, method) => {
  __DEV__ && console.log('sharing succeeded');
};

type SendGreetingCardGalleryScreenRouteProp = RouteProp<
  RootStackParamList,
  'GiftCards'
>;
type SendGreetingCardGalleryScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'GiftCards'
>;

type Props = {
  route: SendGreetingCardGalleryScreenRouteProp;
  navigation: SendGreetingCardGalleryScreenNavigationProp;
};

function SendGreetingCardGalleryScreen({ navigation }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);

  let language = i18n.language.split('-')[0].toLowerCase();

  if (!(language in cardImageSources.gifts)) {
    language = 'en';
  }


  const [cardGiftsEntries] = useState(
    Object.entries(cardImageSources.gifts[language])
  );

  function _renderItem({ item, index }) {
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

  async function sendCard() {
    const currentGiftCardName = cardGiftsEntries[activeSlide][0];

    //TODO see to use only Share.share for both platforms
    if (Platform.OS === 'ios') {
      import('react-native').then(({ ActionSheetIOS }) => {
        ActionSheetIOS.showShareActionSheetWithOptions(
          {
            // url: Expo.Asset.fromModule(
            //   require('../assets/images/iphone-jeu-du-haka.png')
            // ).uri,
            subject: `${i18n.t('greetingHappyNewYear')} ${i18n.t(
              'greetingLetsPlay'
            )}`,
            message: `${i18n.t('greetingHappyNewYear')} ${i18n.t(
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
      });
    } else if (Platform.OS === 'android') {
      Share.share(
        {
          title: `${i18n.t('greetingHappyNewYear')} ${i18n.t(
            'greetingLetsPlay'
          )}`,
          message:
            `${i18n.t('greetingHappyNewYear')} ${i18n.t(
              'findManaWithGiftCard'
            )} ` +
            `https://www.jeuduhaka.com/gift/newyear/${language}/${currentGiftCardName}`,
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
        <MenuButton
          onPress={() => {
            navigation.openDrawer();
          }}
        />
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
            {i18n.t('greetingText')}
          </Text>
        </View>
        <View style={carouselStyles.exampleContainer}>
          <Carousel
            // ref={(c) => {
            //   this._carousel = c;
            // }}
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
            // backgroundColor: 'orange',
          }}>
          <Button onPress={sendCard}>{i18n.t('sendThisGreetingCard')}</Button>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SendGreetingCardGalleryScreen;
