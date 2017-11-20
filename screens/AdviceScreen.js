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
      <FontAwesome name="info" size={18} style={{ color: '#014DA2' }} />
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
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <Text
            style={[
              styles.blackText,
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {I18n.t('adviceMenuTitle')}
          </Text>
          <View>
            <Text style={[styles.blackText, styles.textWithPaddingTop]}>
              - {I18n.t('firstAdvice')}
            </Text>
            <Text style={[styles.blackText, styles.textWithPaddingTop]}>
              - {I18n.t('secondAdvice')}
            </Text>
            <Text style={[styles.blackText, styles.textWithPaddingTop]}>
              - {I18n.t('thirdAdvice')}
            </Text>
            <Text style={[styles.blackText, { fontWeight: 'bold' }]}>
              {I18n.t('adviceFormula')}
            </Text>
            <Text style={[styles.blackText, { paddingHorizontal: 20 }]}>
              {I18n.t('adviceFormulaExplanationPart1')}{' '}
              <Text style={styles.manaText}>Mana</Text>{' '}
              {I18n.t('adviceFormulaExplanationPart2')}
            </Text>
          </View>
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
