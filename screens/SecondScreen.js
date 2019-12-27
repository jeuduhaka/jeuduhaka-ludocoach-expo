import React from '/utils/enhancedReact';
import { Text, Image, Linking, View } from 'react-native';

import I18n from '../i18n';

import { Button } from '../components/common';
import styles from './styles';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

export default class SecondScreen extends React.Component {
  render() {
    const { textContent, buttonOnPress, navigation } = this.props;

    return (
      <View style={styles.container}>
        <BackButton navigation={navigation} tintColor={'#014DA2'} />
        <HomeButton navigation={navigation} tintColor={'#014DA2'} />
        <Image
          style={styles.backgroundOpacity}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
        />
        <View style={styles.navigationHeader} />
        <View style={styles.contentContainer}>
          <View style={[styles.intermediateScreenTextContainer]}>
            <Text style={styles.subtitle}>{textContent}</Text>
            <View style={styles.nextButtonContainer}>
              <Button onPress={buttonOnPress}>{I18n.t('play')}</Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
