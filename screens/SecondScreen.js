import React from '/utilities/enhancedReact';
import { Text, Image, Linking, View } from 'react-native';

import I18n from '../i18n';

import { Button } from '../components/common';
import styles from './styles';
import NavigationHeader from '../components/NavigatonHeader';

export default class SecondScreen extends React.Component {
  render() {
    const { textContent, buttonOnPress } = this.props;
    return (
      <View style={styles.container}>
        <NavigationHeader tintColor={'#014DA2'} />
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
          <View
            style={[styles.titleContainer, styles.navigationHeaderPaddingTop]}>
            <Text style={[styles.title, styles.font20px]}>{textContent}</Text>
          </View>
          <View style={styles.subtitleContainer}>
            {/* <Text style={styles.subtitle}>Activez votre Mana (Pouvoir) ! </Text>
            <Text style={styles.subtitle}>A vous de jouer ! </Text> */}
          </View>
          <View style={styles.startButtonContainer}>
            <Button onPress={buttonOnPress}>{I18n.t('play')}</Button>
          </View>
        </Image>
      </View>
    );
  }
}
