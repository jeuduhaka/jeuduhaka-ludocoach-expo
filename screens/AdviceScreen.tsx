import React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';

import MenuButton from '../components/MenuButton';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/AppNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import styles2 from './styles';
import { useTranslation } from 'react-i18next';

type AdviceScreenRouteProp = RouteProp<RootStackParamList, 'Advice'>;
type AdviceScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Advice'
>;

type Props = {
  route: AdviceScreenRouteProp;
  navigation: AdviceScreenNavigationProp;
};

// TODO better layout
function AdviceScreen({ route, navigation }: Props) {
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
            { padding: 10, justifyContent: 'center', alignItems: 'center' },
          ]}>
          <Text
            style={[
              styles.blackText,
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {t('adviceMenuTitle')}
          </Text>
          <View>
            <Text style={[styles.blackText, styles.textWithPaddingTop]}>
              - {t('firstAdvice')}
            </Text>
            <Text style={[styles.blackText, styles.textWithPaddingTop]}>
              - {t('secondAdvice')}
            </Text>
            <Text style={[styles.blackText, styles.textWithPaddingTop]}>
              - {t('thirdAdvice')}
            </Text>
            <Text style={[styles.blackText, { fontWeight: 'bold' }]}>
              {t('adviceFormula')}
            </Text>
            <Text style={[styles.blackText, { paddingHorizontal: 20 }]}>
              {t('adviceFormulaExplanationPart1')}{' '}
              <Text style={styles.manaText}>Mana</Text>{' '}
              {t('adviceFormulaExplanationPart2')}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
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
