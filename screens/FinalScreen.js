import React from 'react';
import { Text, Image, Linking, View } from 'react-native';

import I18n from '../i18n';

import { Button } from '../components/common';
import styles from './styles';
import NavigationHeader from '../components/NavigatonHeader';

export default class FinalScreen extends React.Component {
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
              {I18n.t('manaActivated')}
            </Text>
          </View>
          <View style={styles.startButtonContainer}>
            <Button
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Home')}
            >
              {I18n.t('thankYou')}
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}
