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
        <Image
          style={{
            // backgroundColor: 'yellow',
            resizeMode: 'contain',
            flex: 1,
            width: width * (4 / 5),
          }}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
          <Text
            style={[
              styles.blackText,
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {I18n.t('authorsTitle')}
          </Text>
          <Image
            style={{
              // backgroundColor: 'yellow',
              resizeMode: 'contain',
              flex: 1,
              width: width * (4 / 5),
            }}
            source={require('../assets/images/authors.png')}
          />
          <Text>Tehotu Tauraatua</Text>
          <Text>Hinenao Kimitete</Text>
          <Text>Marc Kucharz</Text>
        </Image>
      </View>
    );
  }
}

const textfontSize = {
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

export default AuthorsScreen;
