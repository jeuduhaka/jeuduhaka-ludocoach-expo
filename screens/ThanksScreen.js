import React from '/utils/enhancedReact';
import { Text, Image, StyleSheet, Button, View } from 'react-native';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import I18n from '../i18n';

class ThanksScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerMode: 'float',
    drawerLabel: I18n.t('acknowledgementsMenu', {
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
        <BackgroundWave
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={[
              styles.text,
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {I18n.t('acknowledgementsText')}:
          </Text>
          <Text style={styles.text}>
            La Délégation de la Polynésie Française
          </Text>
          <Text style={styles.text}>Teanuanua PARAURAHI</Text>
        </BackgroundWave>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#221E1F',
    fontSize: 16,
  },
});

export default ThanksScreen;
