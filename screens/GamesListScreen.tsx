import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextStyle,
  ImageBackground,
} from 'react-native';

import MenuButton from '../components/MenuButton';
import { RouteProp } from '@react-navigation/native';
import styles2 from './styles';
import { RootStackParamList } from '../navigators/AppNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';

type GamesListScreenRouteProp = RouteProp<RootStackParamList, 'GamesList'>;
type GamesListScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'GamesList'
>;

type Props = {
  route: GamesListScreenRouteProp;
  navigation: GamesListScreenNavigationProp;
};

function GamesListScreen({ navigation }: Props) {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles2.backgroundImage}
        source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
        <MenuButton
          onPress={() => {
            navigation.openDrawer();
          }}
        />
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
            {t('gamesListTitle')}
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
          <Text>Réussite intérieure, le Jeu</Text>
          <Text>Va au bout de tes rêves ! Le Jeu</Text>
          <Text>Le Jeu du plus malin que le diable</Text>
          <Text>Le Jeu du Ho’oponopono</Text>
          <Text>etc...</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const textfontSize: TextStyle = {
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
