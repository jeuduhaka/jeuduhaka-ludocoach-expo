import React from '/utils/enhancedReact';
import { Text, Image, StyleSheet, Button, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import I18n from '../i18n';

class GameGoalScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerMode: 'float',
    drawerLabel: I18n.t('gameGoalTitle', {
      locale: screenProps.language,
    }),
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
          {I18n.t('gameGoalTitle')}
        </Text>
        <Text
          style={[
            styles.blueText,
            styles.textWithPaddingTop,
            { fontWeight: 'bold' },
          ]}>
          Transformez votre énergie négative en énergie positive grâce au
          pouvoir des danses ancestrales maori !
        </Text>
        <Text style={[styles.blackText, styles.textWithPaddingTop]}>
          Seul ou à plusieurs, vous allez exprimer
        </Text>
        <Text style={styles.blackText}>
          par la parole et/ou les gestes vos émotions négatives
        </Text>
        <Text style={styles.blackText}>
          pour mieux les dompter, en suivant 3 étapes essentielles :
        </Text>
        <View style={styles.textWithPaddingTop}>
          <Text style={styles.blackText}>
            <Text style={[styles.stepNumber, styles.colorRed]}>A</Text>{' '}
            <Text style={styles.stepText}>AVOIR</Text> une émotion limitante
          </Text>
          <Text style={styles.blackText}>
            <Text style={[styles.stepNumber, styles.colorOrange]}>B</Text> «
            Yaka » <Text style={styles.stepText}>FAIRE</Text>…
          </Text>
          <Text style={styles.blackText}>
            <Text style={[styles.stepNumber, styles.colorGreen]}>C</Text>{' '}
            <Text style={styles.stepText}>ÊTRE</Text> mieux.
          </Text>
        </View>
        <Text style={[styles.blackText, styles.textWithPaddingTop]}>
          Les gestes du haka joints à la parole
        </Text>
        <Text style={styles.blackText}>
          vont vous permettre de trouver le trésor inestimable
        </Text>
        <Text style={styles.blackText}>
          que nous possédons tous : le <Text style={styles.manaText}>
            Mana
          </Text>{' '}
          (pouvoir).
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
    fontFamily: 'european-pi-one',
  },
  colorRed: {
    color: '#B8282E',
  },
  colorOrange: {
    color: '#F7941C',
  },
  colorGreen: {
    color: '#39B549',
  },
  stepText: {
    fontWeight: 'bold',
  },
});

export default GameGoalScreen;
