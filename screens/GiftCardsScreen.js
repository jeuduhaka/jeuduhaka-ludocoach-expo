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
          <Text
            style={[
              styles.blackText,
              {
                paddingBottom: 20,
                fontWeight: 'bold',
                fontSize: 20,
                backgroundColor: 'transparent',
              },
            ]}>
            Envoyer une carte cadeau
          </Text>
          <View>
            <Text
              style={[
                styles.blackText,
                styles.textWithPaddingTop,
                { backgroundColor: 'transparent' },
              ]}>
              Vous pouvez envoyer à quelqu'un (ou à vous-même) une ou plusieurs
              cartes cadeaux (Force, Amour, Confiance, Paix, Estime de soi,
              Calme, Énergie, Joie) qui lui apportera une énergie positive pour
              l'aider à développer son Mana sur le terrain de jeu de la vie.
            </Text>
            <Text
              style={[
                styles.blackText,
                styles.textWithPaddingTop,
                { backgroundColor: 'transparent' },
              ]}>
              Libre à vous de choisir la carte la plus appropriée pour vous
              et/ou la personne que vous souhaitez aider. Libre à elle de
              l’envoyer à son tour à la personne de son choix.
            </Text>
            <View style={styles.nextButtonContainer}>
              <Button
                onPress={() =>
                  this.props.navigation.navigate('SendGiftCardGallery')}>
                Choisir une carte cadeau
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
