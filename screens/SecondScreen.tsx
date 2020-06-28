import React, { ReactNode } from 'react';
import { Text, Image, Linking, View } from 'react-native';

import i18n from '../i18n';

import { Button } from '../components/common';
import styles from './styles';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

export default class SecondScreen extends React.Component<{
  textContent: ReactNode;
  buttonOnPress: () => void;
}> {
  render() {
    const { textContent, buttonOnPress } = this.props;

    return (
      <View style={styles.container}>
        <BackButton tintColor={'#014DA2'} />
        <HomeButton tintColor={'#014DA2'} />
        <Image
          style={styles.backgroundOpacity}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
        />
        <View style={styles.navigationHeader} />
        <View style={styles.contentContainer}>
          <View style={[styles.intermediateScreenTextContainer]}>
            <Text style={styles.subtitle}>{textContent}</Text>
            <View style={styles.nextButtonContainer}>
              <Button onPress={buttonOnPress}>{i18n.t('play')}</Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}