import React from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  Linking,
  StyleSheet,
  ScrollView,
  Platform,
  Share,
} from 'react-native';

import Constants from 'expo-constants';

import {
  Entypo,
  FontAwesome,
  Foundation,
  MaterialIcons,
} from '@expo/vector-icons';
import TouchableItem from '@react-navigation/drawer/src/views/TouchableItem';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import i18n from '../i18n';

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
const CustomDrawerContentComponent = (props: any) => {
  const { navigation, activeItemKey } = props;

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
        {/* <DrawerItems activeTintColor={'#014DA2'} {...props} /> */}
        <View
          style={
            {
              // flex: 1,
              // flexDirection: 'column',
              // justifyContent: 'flex-end',
            }
          }>
          <TouchableItem
            onPress={() => navigation.navigate('Home')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <MaterialIcons name={'home'} size={18} />
              </View>
              <Text style={[styles.label]}>{i18n.t('backToGame')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('GameGoal')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <Foundation name={'target'} size={18} />
              </View>
              <Text style={[styles.label]}>{i18n.t('gameGoalTitle')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('Advice')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name={'info-circle'} size={18} />
              </View>
              <Text style={[styles.label]}>{i18n.t('adviceMenuTitle')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('GiftCards')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name={'gift'} size={18} />
              </View>
              <Text style={[styles.label]}>{i18n.t('sendGiftCardLabel')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('SendGreetingCard')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <Entypo name={'newsletter'} size={18} />
              </View>
              <Text style={[styles.label]}>
                {i18n.t('sendGreetingCardLabel')}
              </Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => {
              // console.log(i18n.locale);
              const language = i18n.language.split('-')[0].toLowerCase();
              if (Platform.OS === 'ios') {
                // TODO use Share.share
                import('react-native').then(({ ActionSheetIOS }) => {
                  ActionSheetIOS.showShareActionSheetWithOptions(
                    {
                      // url: Expo.Asset.fromModule(
                      //   require('../assets/images/iphone-jeu-du-haka.png')
                      // ).uri,
                      subject: i18n.t('shareSubject'),
                      message: i18n.t('shareMessage'),
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
                    title: i18n.t('shareSubject'),
                    message: `${i18n.t(
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
              <Text style={[styles.label]}>{i18n.t('shareAppLabel')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() =>
              Linking.openURL(
                'mailto:contact@jeuduhaka.com?subject=Jeu du Haka Ludocoach app'
              )
            }
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name={'envelope'} size={18} />
              </View>
              <Text style={[styles.label]}>{i18n.t('contactUs')}</Text>
            </View>
          </TouchableItem>
          <Separator />
          <TouchableItem
            onPress={() => navigation.navigate('Authors')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <Text style={[styles.label]}>{i18n.t('authorsTitle')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('GamesList')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <Text style={[styles.label]}>{i18n.t('gamesListTitle')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('Thanks')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <Text style={[styles.label]}>
                {i18n.t('acknowledgementsMenu')}
              </Text>
            </View>
          </TouchableItem>
          <Separator />
          <TouchableItem
            onPress={() =>
              Linking.openURL('https://www.facebook.com/jeuduhaka')
            }
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <Entypo name={'facebook'} size={18} />
              </View>
              <Text style={[styles.label]}>{i18n.t('onFacebook')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => Linking.openURL('https://www.jeuduhaka.com')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name="globe" size={18} />
              </View>
              <Text style={[styles.label]}>jeuduhaka.com</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => Linking.openURL('http://www.marckucharz.com')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name="globe" size={18} />
              </View>
              <Text style={[styles.label]}>marckucharz.com</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => Linking.openURL('http://www.ludocoaching.com')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name="globe" size={18} />
              </View>
              <Text style={[styles.label]}>ludocoaching.com</Text>
            </View>
          </TouchableItem>
          <View style={[styles.item, { alignItems: 'center' }]}>
            <Text
              style={[styles.label, styles.developedByText]}
              onPress={() =>
                Linking.openURL(
                  'mailto:roques.florent@gmail.com?subject=[Jeu du Haka] Ludocoach app'
                )
              }>
              {i18n.t('developedBy')} Florent Roques{' '}
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
