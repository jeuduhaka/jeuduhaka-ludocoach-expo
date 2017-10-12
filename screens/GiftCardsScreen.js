import React from '/utils/enhancedReact';
import { Text, Image, StyleSheet, Button, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import I18n from '../i18n';

class GiftCardsScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerMode: 'float',
    drawerLabel: 'Envoyer une carte cadeau',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name="handshake-o" size={18} style={{ color: '#014DA2' }} />
    ),
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MenuButton
          onPress={() => {
            this.props.navigation.navigate('DrawerOpen');
          }}
        />
        <Text
          style={[
            styles.blackText,
            { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
          ]}>
          Envoyer une carte cadeau
        </Text>
        <Text style={[styles.blackText, styles.textWithPaddingTop]}>
          Vous pouvez envoyer à quelqu'un (ou à vous-même) une ou plusieurs
          cartes cadeaux (Force, Amour, Confiance, Paix, Estime de soi, Calme,
          Énergie, Joie) qui lui apportera une énergie positive pour l'aider à
          développer son Mana sur le terrain de jeu de la vie.
        </Text>
        <Text style={[styles.blackText, styles.textWithPaddingTop]}>
          Libre à vous de choisir la carte la plus appropriée pour vous et/ou la
          personne que vous souhaitez aider. Libre à elle de l’envoyer à son
          tour à la personne de son choix.
        </Text>
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
