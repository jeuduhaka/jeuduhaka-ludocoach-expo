import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextStyle,
  ImageBackground,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import MenuButton from '../components/MenuButton';
import i18n from '../i18n';
import { RootStackParamList } from '../navigators/AppNavigator';
import styles2 from './styles';

type GameGoalScreenRouteProp = RouteProp<RootStackParamList, 'GameGoal'>;
type GameGoalScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'GameGoal'
>;

type Props = {
  route: GameGoalScreenRouteProp;
  navigation: GameGoalScreenNavigationProp;
};

function GameGoalScreen({ route, navigation }: Props) {
  const language = i18n.language.split('-')[0].toLowerCase();

  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles2.backgroundImage}
        source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
        <View style={styles2.navigationHeader}>
          <MenuButton
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </View>
        <View
          style={[
            styles2.contentContainer,
            { justifyContent: 'center', alignItems: 'center' },
          ]}>
          <Text
            style={[
              styles.blackText,
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {t('gameGoalTitle')}
          </Text>
          <Text
            style={[
              styles.blueText,
              styles.textWithPaddingTop,
              { fontWeight: 'bold' },
            ]}>
            {t('transformYourEnergy')}
          </Text>
          {language !== 'zh' ?
              <>
                <Text style={[styles.blackText, styles.textWithPaddingTop]}>
                  {t('gameGoalParagraph1Part1')}
                </Text>
                <Text style={styles.blackText}>
                  {t('gameGoalParagraph1Part2')}
                </Text>
                <Text style={styles.blackText}>
                  {t('gameGoalParagraph1Part3')}
                </Text>
              </>
           :
              <Text style={[styles.blackText, styles.textWithPaddingTop]}>
                {t('gameGoalParagraph1')}
              </Text>
          }
          
          <View style={styles.textWithPaddingTop}>
            <Text style={styles.blackText}>
              <Text style={[styles.stepNumber, styles.colorRed]}>A</Text>{' '}
              <Text style={styles.stepText}>{i18n.t('having')}</Text>
              {t('limitingEmotion')}
            </Text>
            <Text style={styles.blackText}>
              <Text style={[styles.stepNumber, styles.colorOrange]}>B</Text>
              {t('yaka')}
              <Text style={styles.stepText}> {i18n.t('doing')}</Text>
            </Text>
            <Text style={styles.blackText}>
              <Text style={[styles.stepNumber, styles.colorGreen]}>C</Text>{' '}
              <Text style={styles.stepText}>{i18n.t('being')}</Text>
              {t('better')}
            </Text>
          </View>
          {language !== 'zh' ?
              <>
                <Text style={[styles.blackText, styles.textWithPaddingTop]}>
                  {t('gameGoalParagraph2Part1')}
                </Text>
                <Text style={styles.blackText}>
                  {t('gameGoalParagraph2Part2')}
                </Text>
                <Text style={styles.blackText}>
                  {t('gameGoalParagraph2Part3')}{' '}
                  <Text style={styles.manaText}>Mana</Text>{' '}
                  {t('powerParenthesis')}
                </Text>
              </>
           :
              <>
                <Text style={[styles.blackText, styles.textWithPaddingTop]}>
                  {t('gameGoalParagraph2')}
                </Text>
                <Text style={styles.blackText}>
                  {' '}
                  <Text style={styles.manaText}>Mana</Text>{' '}
                  {t('powerParenthesis')}
                </Text>
              </>
          }
        </View>
      </ImageBackground>
    </View>
  );
}

const textfontSize: TextStyle = {
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
