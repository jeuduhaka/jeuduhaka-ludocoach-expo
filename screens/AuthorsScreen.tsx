import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Button,
  View,
  Dimensions,
  TextStyle,
  ImageBackground,
} from 'react-native';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import i18n from '../i18n';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/AppNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import styles2 from './styles';

const { width } = Dimensions.get('window');

type AuthorsScreenRouteProp = RouteProp<RootStackParamList, 'Advice'>;
type AuthorsScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  'Advice'
>;

type Props = {
  route: AuthorsScreenRouteProp;
  navigation: AuthorsScreenNavigationProp;
};

// TODO better layout
function AuthorsScreen({ navigation }: Props) {
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
        <Text style={[styles.blackText, styles.titleText]}>
          {i18n.t('authorsTitle')}
        </Text>

        <View style={styles.authorsInfoContainer}>
          <View style={[styles.authorInfoContainer, { paddingTop: '5%' }]}>
            <Text style={styles.authorTitle}>Tehotu Tauraatua</Text>
            <Text style={styles.authorDesc}>{i18n.t('tehotuDescription')}</Text>
          </View>
          <View style={[styles.authorInfoContainer, { paddingTop: '10%' }]}>
            <Text style={styles.authorTitle}>Hinenao Kimitete</Text>
            <Text style={styles.authorDesc}>
              {i18n.t('hinenaoDescription')}
            </Text>
          </View>
          <View style={[styles.authorInfoContainer, { paddingTop: '10%' }]}>
            <Text style={styles.authorTitle}>Marc Kucharz</Text>
            <Text style={styles.authorDesc}>{i18n.t('marcDescription')}</Text>
          </View>
        </View>
        <View style={styles.authorsImageContainer}>
          <Image
            style={styles.authorsImage}
            source={require('../assets/images/authors.png')}
          />
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
  blackText: {
    ...textfontSize,
    color: '#221E1F',
  },
  titleText: {
    flex: 1 / 14,
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 5,
    // backgroundColor: 'orange',
  },
  title: {},
  authorsImageContainer: {
    flex: 10 / 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  authorsImage: {
    flex: 1,
    // backgroundColor: 'yellow',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  authorsInfoContainer: {
    flex: 3 / 14,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-start',
    width: '90%',
    // backgroundColor: 'yellow',
  },
  authorInfoContainer: {
    flex: 1 / 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  authorTitle: {
    // color: '#014DA2',
    fontSize: width * 0.07,
    fontFamily: 'charcuterie-sans-inline',
  },
  authorDesc: {
    fontSize: width * 0.035,
    paddingHorizontal: 2,
  },
});

export default AuthorsScreen;
