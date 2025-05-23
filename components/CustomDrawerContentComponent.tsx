import React from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  Linking,
  StyleSheet,
  Platform,
  Share,
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import {
  Entypo,
  FontAwesome,
  Foundation,
  MaterialIcons,
} from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';

import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62,
  },
  label: {
    color: '#000000',
    margin: 12,
    fontWeight: 'bold',
  },
  developedByText: {
    color: '#666666',
    fontWeight: 'normal',
    fontSize: 12,
  },
});

const Separator = () => (
  <View
    style={{
      borderTopWidth: 1,
      marginHorizontal: 16,
      alignItems: 'center',
    }}
  />
);

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

// TODO specify any
const CustomDrawerContentComponent = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const language = i18n.language.split('-')[0].toLowerCase();

  return (
    <ImageBackground
      style={{
        flex: 1,
        width: undefined,
        height: undefined,
      }}
      source={require('../assets/images/motif-self-esteem-alpha-0.1.png')}>
      <DrawerContentScrollView
        style={{ flex: 1, backgroundColor: 'rgba(247, 148, 28, 0.5)' }}>
        <Image
          style={{
            alignSelf: 'center',
            marginTop: 10,
            width: 100,
            height: 100,
            opacity: 1,
          }}
          source={require('../assets/images/jeu-du-haka-logo-200x200.png')}
        />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <MaterialIcons name={'home'} size={18} />
              </View>
              <Text style={[styles.label]}>{t('backToGame')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('GameGoal')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <Foundation name={'target'} size={18} />
              </View>
              <Text style={[styles.label]}>{t('gameGoalTitle')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Advice')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name={'info-circle'} size={18} />
              </View>
              <Text style={[styles.label]}>{t('adviceMenuTitle')}</Text>
            </View>
          </TouchableOpacity>
          {language !== 'zh' ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('GiftCards')}
              delayPressIn={0}>
              <View style={[styles.item]}>
                <View style={[styles.icon, styles.inactiveIcon]}>
                  <FontAwesome name={'gift'} size={18} />
                </View>
                <Text style={[styles.label]}>{t('sendGiftCardLabel')}</Text>
              </View>
            </TouchableOpacity>
          ) : null}
          {language !== 'zh' ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('SendGreetingCard')}
              delayPressIn={0}>
              <View style={[styles.item]}>
                <View style={[styles.icon, styles.inactiveIcon]}>
                  <Entypo name={'newsletter'} size={18} />
                </View>
                <Text style={[styles.label]}>
                  {t('sendGreetingCardLabel')}
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
          {/* <TouchableOpacity
            onPress={() => {
              if (Platform.OS === 'ios') {
                // TODO use Share.share
                import('react-native').then(({ ActionSheetIOS }) => {
                  ActionSheetIOS.showShareActionSheetWithOptions(
                    {
                      subject: t('shareSubject'),
                      message: t('shareMessage'),
                      url: `https://www.jeuduhaka.com/application/${language}`,
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
                })
              } else if (Platform.OS === 'android') {
                Share.share(
                  {
                    title: t('shareSubject'),
                    message: `${t(
                      'shareMessage'
                    )} https://www.jeuduhaka.com/application/${language}`,
                  },
                  {}
                );
              }
            }}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name={'share-alt'} size={18} />
              </View>
              <Text style={[styles.label]}>{t('shareAppLabel')}</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'mailto:contact@marckucharz.com?subject=[Jeu du Haka] Ludocoach app'
              )
            }
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name={'envelope'} size={18} />
              </View>
              <Text style={[styles.label]}>{t('contactUs')}</Text>
            </View>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity
            onPress={() => navigation.navigate('Authors')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <Text style={[styles.label]}>{t('authorsTitle')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('GamesList')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <Text style={[styles.label]}>{t('gamesListTitle')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Acknowledgements')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <Text style={[styles.label]}>
                {t('acknowledgementsMenu')}
              </Text>
            </View>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.facebook.com/jeuduhaka')
            }
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <Entypo name={'facebook'} size={18} />
              </View>
              <Text style={[styles.label]}>{t('onFacebook')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.jeuduhaka.com')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name="globe" size={18} />
              </View>
              <Text style={[styles.label]}>jeuduhaka.com</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('http://www.marckucharz.com')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name="globe" size={18} />
              </View>
              <Text style={[styles.label]}>marckucharz.com</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('http://www.ludocoaching.com')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name="globe" size={18} />
              </View>
              <Text style={[styles.label]}>ludocoaching.com</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.item, { alignItems: 'center' }]}>
            <Text
              style={[styles.label, styles.developedByText]}
              onPress={() =>
                Linking.openURL(
                  'mailto:roques.florent@gmail.com?subject=[Jeu du Haka] Ludocoach app'
                )
              }>
              {t('developedBy')} Florent Roques{' '}
              {`
                `}{' '}
              Version {Constants.manifest.version}
            </Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

export default CustomDrawerContentComponent;
