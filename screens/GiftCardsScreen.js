import React from '/utils/enhancedReact';
import { Text, Image, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import I18n from '../i18n';
import { Button } from '../components/common';

class GiftCardsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuButton
          onPress={() => {
            this.props.navigation.navigate('DrawerOpen');
          }}
        />
        <BackgroundWave
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              flex: 3 / 10,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={[
                styles.blackText,
                {
                  // paddingBottom: 20,
                  fontWeight: 'bold',
                  fontSize: 20,
                  backgroundColor: 'transparent',
                },
              ]}>
              {I18n.t('sendGiftCard')}
            </Text>
          </View>
          <View style={{ flex: 7 / 10 }}>
            <View style={{ flex: 7 / 10 }}>
              <Text
                style={[
                  styles.blackText,
                  styles.textWithPaddingTop,
                  { backgroundColor: 'transparent' },
                ]}>
                {I18n.t('sendGiftCardTextPart1')}
              </Text>
              <Text
                style={[
                  styles.blackText,
                  styles.textWithPaddingTop,
                  { backgroundColor: 'transparent' },
                ]}>
                {I18n.t('sendGiftCardTextPart2')}
              </Text>
            </View>
            <View style={{ flex: 3 / 10 }}>
              <Button
                onPress={() =>
                  this.props.navigation.navigate('SendGiftCardGallery')}>
                {I18n.t('chooseGiftCard')}
              </Button>
            </View>
          </View>
        </BackgroundWave>
      </View>
    );
  }
}

const textfontSize = {
  fontSize: 16,
  textAlign: 'center',
};
const styles = StyleSheet.create({
  blueText: {
    ...textfontSize,
    color: '#014DA2',
  },
  blackText: {
    ...textfontSize,
    color: '#221E1F',
  },
  textWithPaddingTop: {
    paddingTop: 10,
  },
  manaText: {
    color: '#014DA2',
    fontFamily: 'charcuterie-sans-inline',
  },
  stepNumber: {
    // fontFamily: 'european-pi-one',
  },
  stepText: {
    fontWeight: 'bold',
  },
});

export default GiftCardsScreen;
