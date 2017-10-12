import React from '/utils/enhancedReact';
import { Text, Image, StyleSheet, Button, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import I18n from '../i18n';

class AdviceScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerMode: 'float',
    drawerLabel: I18n.t('adviceMenuTitle', {
      locale: screenProps.language,
    }),
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name="handshake-o" size={18} style={{ color: '#014DA2' }} />
    ),
  });

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
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {I18n.t('adviceMenuTitle')}
          </Text>
          <Text style={[styles.blackText, styles.textWithPaddingTop]}>
            - Avant chaque mouvement, respirez bien.
          </Text>
          <Text style={[styles.blackText, styles.textWithPaddingTop]}>
            - Si vous n'avez pas le temps de jouer au mode "3 mouvements",
            pratiquez le mode "1 mouvement". Cette version plus rapide vous
            permettra de changer d'état rapidement.
          </Text>
          <Text style={[styles.blackText, styles.textWithPaddingTop]}>
            - Après avoir expérimenté le Jeu du Haka, dites-vous :
          </Text>
          <Text style={[styles.blackText, { fontWeight: 'bold' }]}>
            "Le pouvoir est en moi !"
          </Text>
          <Text style={[styles.blackText, { paddingHorizontal: 20 }]}>
            Cette formule vous permettra de réactiver votre Mana (pouvoir) à
            tout moment !
          </Text>
        </BackgroundWave>
      </View>
    );
  }
}

const textfontSize = {
  fontSize: 16,
  // textAlign: 'left',
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

export default AdviceScreen;
