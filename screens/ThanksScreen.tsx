import React from 'react';
import { Text, Image, StyleSheet, Button, View } from 'react-native';

import MenuButton from '../components/MenuButton';
import BackgroundWave from '../components/BackgroundWave';
import i18n from '../i18n';
import { useNavigation } from '@react-navigation/native';

class ThanksScreen extends React.Component {
  static navigationOptions = ({
    screenProps,
  }: {
    screenProps: {
      language: string;
    };
  }) => ({
    headerMode: 'float',
    drawerLabel: i18n.t('acknowledgementsMenu', {
      locale: screenProps.language,
    }),
  });

  render() {
    const navigation = useNavigation();

    return (
      <View style={{ flex: 1 }}>
        <MenuButton
          onPress={() => {
            navigation.navigate('DrawerOpen');
          }}
        />
        <BackgroundWave
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={[
              styles.text,
              { paddingBottom: 20, fontWeight: 'bold', fontSize: 20 },
            ]}>
            {i18n.t('acknowledgementsText')}:
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
