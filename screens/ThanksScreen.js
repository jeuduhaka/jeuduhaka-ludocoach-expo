import React from 'react';
import { Text, Image, StyleSheet, Button, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import MenuButton from '../components/MenuButton';
import I18n from '../i18n';

class ThanksScreen extends React.Component {
  static navigationOptions = {
    headerMode: 'float',
    drawerLabel: I18n.t('acknowledgementsMenu'),
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name="handshake-o" size={18} style={{ color: '#014DA2' }} />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MenuButton
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        />
        <Text style={[styles.text, { paddingBottom: 20 }]}>
          {I18n.t('acknowledgementsText')}:
        </Text>
        <Text style={styles.text}>La Délégation de la Polynésie Française</Text>
        <Text style={styles.text}>Teanuanua PARAURAHI</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#014DA2',
    fontSize: 16
  }
});

export default ThanksScreen;
