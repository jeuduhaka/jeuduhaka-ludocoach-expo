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
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Button } from '../components/common';
import BackgroundWave from '../components/BackgroundWave';
import MenuButton from '../components/MenuButton';
import BackButton from '../components/BackButton';
import I18n from '../i18n';
import carouselStyles, { colors } from '../components/CardCarousel/index.style';
import sliderEntryStyles, {
  sliderWidth,
  itemWidth,
} from '../components/CarouselSliderEntryTextOnImage/SliderEntryTextOnImage.style';
import cardImageSources from '../stores/CardImageSources';

const cardGiftsEntries = Object.entries(cardImageSources.gifts);

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

class SendGiftCardGalleryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  _renderItem({ item, index }) {
    const [key, value] = item;
    // console.log(item);

    return (
      <View
        style={
          (sliderEntryStyles.slideInnerContainer, { alignItems: 'center' })
        }>
        <View style={sliderEntryStyles.imageContainer}>
          <Image source={value} style={sliderEntryStyles.image} />
        </View>
      </View>
    );
  }

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
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={cardGiftsEntries}
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
          </ScrollView>
          <View
            style={{
              flex: 2 / 5,
            }}>
            <Button
              title="Envoyer"
              onPress={() => {
                const currentGiftCardName =
                  cardGiftsEntries[this.state.activeSlide][0];
                console.log(currentGiftCardName);

                if (Platform.OS === 'ios') {
                  ActionSheetIOS.showShareActionSheetWithOptions(
                    {
                      // url: Expo.Asset.fromModule(
                      //   require('../assets/images/iphone-jeu-du-haka.png')
                      // ).uri,
                      url:
                        'https://www.jeuduhaka.com/gift?name=' +
                        currentGiftCardName,
                      message:
                        'Retrouve ton pouvoir (Mana) grâce à cette carte cadeau !',
                      subject: 'Carte cadeau ' + I18n.t(currentGiftCardName),
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
                      title: 'Carte cadeau ' + I18n.t(currentGiftCardName),
                      message:
                        'Retrouve ton pouvoir (Mana) grâce à cette carte cadeau ! https://www.jeuduhaka.com/gift?name=' +
                        currentGiftCardName,
                    },
                    {}
                  );
                }
              }}>
              Envoyer cette carte cadeau
            </Button>
          </View>
        </BackgroundWave>
      </View>
    );
  }
}

export default SendGiftCardGalleryScreen;
