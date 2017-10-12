import React from '/utils/enhancedReact';
import {
  Text,
  Image,
  StyleSheet,
  Button,
  View,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import I18n from '../i18n';

const { height, width } = Dimensions.get('window');

class AuthorsScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerMode: 'float',
    drawerLabel: I18n.t('authorsTitle', {
      locale: screenProps.language,
    }),
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name="handshake-o" size={18} style={{ color: '#014DA2' }} />
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
        <BackgroundWave>
          <Text
            style={[
              styles.blackText,
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {I18n.t('authorsTitle')}
          </Text>

          <View style={styles.authorsInfoContainer}>
            <View style={[styles.authorInfoContainer, { paddingTop: '5%' }]}>
              <Text style={styles.authorTitle}>Tehotu Tauraatua</Text>
              <Text style={styles.authorDesc}>
                Tahitien, coach en bien-être et danseur.
              </Text>
            </View>
            <View style={[styles.authorInfoContainer, { paddingTop: '10%' }]}>
              <Text style={styles.authorTitle}>Hinenao Kimitete</Text>
              <Text style={styles.authorDesc}>
                Marquisienne, illustratrice et coach en bien-être.
              </Text>
            </View>
            <View style={[styles.authorInfoContainer, { paddingTop: '10%' }]}>
              <Text style={styles.authorTitle}>Marc Kucharz</Text>
              <Text style={styles.authorDesc}>
                Parisien, auteur de jeux et fondateur du ludocoaching
              </Text>
            </View>
          </View>
          <View style={styles.authorsImageContainer}>
            <Image
              style={styles.authorsImage}
              source={require('../assets/images/authors.png')}
            />
          </View>
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
  blackText: {
    ...textfontSize,
    color: '#221E1F',
  },
  title: {},
  textWithPaddingTop: {
    paddingTop: 10,
  },
  authorsImageContainer: {
    flex: 3 / 4,
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
    flex: 1 / 4,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: '90%',
  },
  authorInfoContainer: {
    flex: 1 / 3,
    alignItems: 'center',
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