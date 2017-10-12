import React from '/utils/enhancedReact';
import { Text, Image, StyleSheet, Button, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import I18n from '../i18n';

class GamesListScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerMode: 'float',
    drawerLabel: I18n.t('gamesListTitle', {
      locale: screenProps.language,
    }),
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
            {I18n.t('gamesListTitle')}
          </Text>
          <Text>Le Jeu de l’Entraide</Text>
          <Text>Le Jeu des Vies antérieures</Text>
          <Text>Le Jeu des Sept Lois spirituelles</Text>
          <Text>Horaklès le Jeu du Héros</Text>
          <Text>Le Jeu de la Démanipulation</Text>
          <Text>Le Jeu de l’Humour</Text>
          <Text>Conversations avec Dieu, le Jeu</Text>
          <Text>Je(u) Vote</Text>
          <Text>Le Jeu des Accords toltèques</Text>
          <Text>Le Jeu de la Paix intérieure</Text>
          <Text>Réussite intérieure, le jeu</Text>
          <Text>Va au bout de tes rêves ! Jeu</Text>
          <Text>Le Jeu du plus malin que le diable</Text>
          <Text>Le Jeu du Ho’oponopono</Text>
          <Text>etc...</Text>
        </BackgroundWave>
      </View>
    );
  }
}

const textfontSize = {
  fontSize: 16,
  textAlign: 'left',
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

export default GamesListScreen;
