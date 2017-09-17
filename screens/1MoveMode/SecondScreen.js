import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { Button } from '../../components/common';
import styles from '../styles';

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
        <Image
          style={styles.backgroundImage}
          source={require('../../assets/images/fond-bleu-vague-1980x1980.jpg')}
        >
          <View style={styles.titleContainer}>
            <Text style={[styles.title, styles.font20px]}>
              Choisissez une carte de chaque couleur en fonction de vos émotions
              et laissez-vous guider en appuyant sur la carte correspondante
              dans l'ordre : <Text style={{ color: '#B8282E' }}>1.AVOIR</Text>,{' '}
              <Text style={{ color: '#F7941C' }}>2.FAIRE</Text>,{' '}
              <Text style={{ color: '#39B549' }}>3.ETRE</Text>
            </Text>
          </View>
          <View style={styles.startButtonContainer}>
            <Button onPress={() => this.props.navigation.navigate('Deck')}>
              Jouer
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}
