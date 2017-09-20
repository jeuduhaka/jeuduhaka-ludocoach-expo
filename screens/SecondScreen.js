import React from 'react';
import { Text, Image, Linking, View } from 'react-native';

import I18n from '../i18n';

import { Button } from '../components/common';
import styles from './styles';
import NavigationHeader from '../components/NavigatonHeader';

export default class SecondScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader tintColor={'#014DA2'} />
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
        >
          <View
            style={[styles.titleContainer, styles.navigationHeaderPaddingTop]}
          >
            <Text style={[styles.title, styles.font20px]}>
              {I18n.t('chooseCards')}{' '}
              <Text style={{ color: '#B8282E' }}>1.{I18n.t('having')}</Text>,{' '}
              <Text style={{ color: '#F7941C' }}>2.{I18n.t('doing')}</Text>,{' '}
              <Text style={{ color: '#39B549' }}>3.{I18n.t('being')}</Text>
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            {/* <Text style={styles.subtitle}>Activez votre Mana (Pouvoir) ! </Text>
            <Text style={styles.subtitle}>A vous de jouer ! </Text> */}
          </View>
          <View style={styles.startButtonContainer}>
            <Button onPress={() => this.props.navigation.navigate('Deck')}>
              {I18n.t('play')}
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}
