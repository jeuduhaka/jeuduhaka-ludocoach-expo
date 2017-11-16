import React from '/utils/enhancedReact';
import {
  Text,
  Image,
  StyleSheet,
  Button,
  View,
  Dimensions,
} from 'react-native';

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
          <Text style={[styles.blackText, styles.titleText]}>
            {I18n.t('authorsTitle')}
          </Text>

          <View style={styles.authorsInfoContainer}>
            <View style={[styles.authorInfoContainer, { paddingTop: '5%' }]}>
              <Text style={styles.authorTitle}>Tehotu Tauraatua</Text>
              <Text style={styles.authorDesc}>
                {I18n.t('tehotuDescription')}
              </Text>
            </View>
            <View style={[styles.authorInfoContainer, { paddingTop: '10%' }]}>
              <Text style={styles.authorTitle}>Hinenao Kimitete</Text>
              <Text style={styles.authorDesc}>
                {I18n.t('hinenaoDescription')}
              </Text>
            </View>
            <View style={[styles.authorInfoContainer, { paddingTop: '10%' }]}>
              <Text style={styles.authorTitle}>Marc Kucharz</Text>
              <Text style={styles.authorDesc}>{I18n.t('marcDescription')}</Text>
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
