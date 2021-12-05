import React from 'react';
import { Text, StyleSheet, View, ImageBackground} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';

import { RootStackParamList } from '../navigators/AppNavigator';
import MenuButton from '../components/MenuButton';
import styles2 from './styles';

type GiftCardsScreenRouteProp = RouteProp<RootStackParamList, 'Acknowledgements'>;
type GiftCardsScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Acknowledgements'
>;

type Props = {
  route: GiftCardsScreenRouteProp;
  navigation: GiftCardsScreenNavigationProp;
};

function AcknowledgementsScreen({ navigation }: Props) {
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
              styles.text,
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {t('acknowledgementsText')}:
          </Text>
          <Text style={styles.text}>
            La Délégation de la Polynésie Française
          </Text>
          <Text style={styles.text}>Teanuanua PARAURAHI</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#221E1F',
    fontSize: 16,
  },
});

export default AcknowledgementsScreen;
