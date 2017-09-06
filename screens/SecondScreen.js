import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { Button } from '../components/common';

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
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.titleFirst}>
              Maintenant que vous avez choisi une carte de chaque couleur,
              laissez-vous guider par le ludocoach en appuyant sur la vidéo
              correspondante dans l'ordre :{' '}
              <Text style={{ color: '#B8282E' }}>1.AVOIR</Text>,{' '}
              <Text style={{ color: '#F7941C' }}>2.FAIRE</Text>,{' '}
              <Text style={{ color: '#39B549' }}>3.ETRE</Text>
            </Text>
            {/* 1 - */}
            {/* <Text style={styles.title}>1 - AVOIR</Text>
            <Text style={styles.title}>2 - FAIRE</Text>
            <Text style={styles.title}>3 - ETRE</Text> */}
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Activez votre Mana (Pouvoir) ! </Text>
            <Text style={styles.subtitle}>A vous de jouer ! </Text>
          </View>
          <View style={styles.startButtonContainer}>
            <Button
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Main')}
            >
              Activer
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = {
  container: { flex: 1 },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
  },
  titleContainer: {
    flex: 3,
    paddingTop: '15%'
  },
  titleFirst: {
    fontSize: 20,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  subtitleContainer: {
    flex: 1
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'charcuterie-sans-inline',
    color: '#014DA2',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  homeImageContainer: {
    flex: 6
  },
  homeImage: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  startButtonContainer: { flex: 1 },
  startButton: {
    alignSelf: 'center',
    fontFamily: 'charcuterie-sans-inline',
    backgroundColor: '#000'
  },
  websites: { flex: 1 },
  websiteLink: {
    backgroundColor: 'transparent'
  },
  copyrightContainer: { flex: 1 },
  copyright: { backgroundColor: 'transparent' }
};
