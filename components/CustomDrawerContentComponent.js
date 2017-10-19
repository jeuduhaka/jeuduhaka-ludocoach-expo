import React from '/utils/enhancedReact';
import {
  Text,
  Image,
  View,
  TouchableHighlight,
  Linking,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import {
  Entypo,
  FontAwesome,
  Foundation,
  MaterialIcons,
} from '@expo/vector-icons';
import TouchableItem from 'react-navigation/src/views/TouchableItem';

import I18n from '../i18n/';

//Help for drawer menu item from react-navigation
import DrawerNavigatorItems from 'react-navigation/src/views/Drawer/DrawerNavigatorItems.js';

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

// const TouchableDrawerItem = () => {
//   return (
//     <TouchableItem
//       onPress={() => navigation.navigate('Advice')}
//       delayPressIn={0}>
//       <View style={[styles.item]}>
//         <View style={[styles.icon, styles.inactiveIcon]}>
//           <Entypo name={'info'} size={18} />
//         </View>
//         <Text style={[styles.label]}>{I18n.t('adviceMenuTitle')}</Text>
//       </View>
//     </TouchableItem>
//   );
// }

const CustomDrawerContentComponent = props => {
  const { navigation, activeItemKey } = props;

  return (
    <Image
      style={{
        flex: 1,
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
      }}
      source={require('../assets/images/motif-estime-de-soi-alpha-0.1.png')}>
      <ScrollView
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
          style={{
            // flex: 1,
            // flexDirection: 'column',
            // justifyContent: 'flex-end',
          }}>
          <TouchableItem
            onPress={() => navigation.navigate('Home')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <MaterialIcons name={'home'} size={18} />
              </View>
              <Text style={[styles.label]}>{I18n.t('backToGame')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('GameGoal')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <Foundation name={'target'} size={18} />
              </View>
              <Text style={[styles.label]}>{I18n.t('gameGoalTitle')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('Advice')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <Entypo name={'info'} size={18} />
              </View>
              <Text style={[styles.label]}>{I18n.t('adviceMenuTitle')}</Text>
            </View>
          </TouchableItem>
          <Separator />
          <TouchableItem
            onPress={() => navigation.navigate('Authors')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <Text style={[styles.label]}>{I18n.t('authorsTitle')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('GamesList')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <Text style={[styles.label]}>{I18n.t('gamesListTitle')}</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => navigation.navigate('Thanks')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <Text style={[styles.label]}>
                {I18n.t('acknowledgementsMenu')}
              </Text>
            </View>
          </TouchableItem>
          <Separator />
          <TouchableItem
            onPress={() =>
              Linking.openURL('https://www.facebook.com/jeuduhaka')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <Entypo name={'facebook'} size={18} />
              </View>
              <Text style={[styles.label]}>Facebook</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => Linking.openURL('https://www.jeuduhaka.com')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name="globe" size={18} />
              </View>
              <Text style={[styles.label]}>Le Jeu du Haka</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => Linking.openURL('http://www.marckucharz.com')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name="globe" size={18} />
              </View>
              <Text style={[styles.label]}>Marc Kucharz</Text>
            </View>
          </TouchableItem>
          <TouchableItem
            onPress={() => Linking.openURL('http://www.ludocoaching.com')}
            delayPressIn={0}>
            <View style={[styles.item]}>
              <View style={[styles.icon, styles.inactiveIcon]}>
                <FontAwesome name="globe" size={18} />
              </View>
              <Text style={[styles.label]}>Ludocoaching</Text>
            </View>
          </TouchableItem>
          <View style={[styles.item, { alignItems: 'center' }]}>
            <Text style={[styles.label, styles.developedByText]}>
              {I18n.t('developedBy')} Florent Roques
            </Text>
          </View>
          <View style={[styles.item, { alignItems: 'center' }]}>
            <Text style={[styles.label, styles.developedByText]}>
              Version 1.0.4
            </Text>
          </View>
        </View>
      </ScrollView>
    </Image>
  );
};

export default CustomDrawerContentComponent;
