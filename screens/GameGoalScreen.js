import React from '/utils/enhancedReact';
import { Text, Image, StyleSheet, Button, View } from 'react-native';
import { FontAwesome, Foundation } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import I18n from '../i18n';

class GameGoalScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerMode: 'float',
    drawerLabel: I18n.t('gameGoalTitle', {
      locale: screenProps.language,
    }),
    drawerIcon: ({ tintColor }) => (
      <Foundation name="target" size={18} style={{ color: '#014DA2' }} />
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
            {I18n.t('gameGoalTitle')}
          </Text>
          <Text
            style={[
              styles.blueText,
              styles.textWithPaddingTop,
              { fontWeight: 'bold' },
            ]}>
            {I18n.t('transformYourEnergy')}
          </Text>
          <Text style={[styles.blackText, styles.textWithPaddingTop]}>
            {I18n.t('gameGoalParagraph1Part1')}
          </Text>
          <Text style={styles.blackText}>
            {I18n.t('gameGoalParagraph1Part2')}
          </Text>
          <Text style={styles.blackText}>
            {I18n.t('gameGoalParagraph1Part3')}
          </Text>
          <View style={styles.textWithPaddingTop}>
            <Text style={styles.blackText}>
              <Text style={[styles.stepNumber, styles.colorRed]}>A</Text>{' '}
              <Text style={styles.stepText}>{I18n.t('having')}</Text>
              {I18n.t('limitingEmotion')}
            </Text>
            <Text style={styles.blackText}>
              <Text style={[styles.stepNumber, styles.colorOrange]}>B</Text>
              {I18n.t('yaka')}
              <Text style={styles.stepText}> {I18n.t('doing')}</Text>
            </Text>
            <Text style={styles.blackText}>
              <Text style={[styles.stepNumber, styles.colorGreen]}>C</Text>{' '}
              <Text style={styles.stepText}>{I18n.t('being')}</Text>
              {I18n.t('better')}
            </Text>
          </View>
          <Text style={[styles.blackText, styles.textWithPaddingTop]}>
            {I18n.t('gameGoalParagraph2Part1')}
          </Text>
          <Text style={styles.blackText}>
            {I18n.t('gameGoalParagraph2Part2')}
          </Text>
          <Text style={styles.blackText}>
            {I18n.t('gameGoalParagraph2Part3')}{' '}
            <Text style={styles.manaText}>Mana</Text>{' '}
            {I18n.t('powerParenthesis')}
          </Text>
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
