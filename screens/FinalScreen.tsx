import React from 'react';
import { Text, Image, View } from 'react-native';

import { Button } from '../components/common';
import styles from './styles';
// import NavigationHeader from '../components/NavigationHeader';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

type FinalScreenRouteProp = RouteProp<RootStackParamList, 'Final'>;

type FinalScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Final'
>;

type Props = {
  route: FinalScreenRouteProp;
  navigation: FinalScreenNavigationProp;
};

function FinalScreen({ route, navigation }: Props) {
  const { t } = useTranslation();
  
  return (
    <View style={styles.container}>
      <BackButton tintColor={'#014DA2'} />
      <HomeButton tintColor={'#014DA2'} />
      <Image
        style={styles.backgroundOpacity}
        source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
      />
      <View style={styles.navigationHeader} />
      <View style={styles.contentContainer}>
        <View style={[styles.intermediateScreenTextContainer]}>
          <Text style={[styles.subtitle]}>{t('manaActivated')}</Text>
          <View style={styles.nextButtonContainer}>
            <Button
              onPress={() => {
                navigation.navigate('Home');
              }}>
              {t('thankYou')}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default FinalScreen;
