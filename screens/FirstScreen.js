import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { Button } from '../components/common';

export default class FirstScreen extends React.Component {
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
            <Text style={styles.title}>Le Jeu du Haka</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>guidé par le ludocoach Tehotu</Text>
          </View>
          <View style={styles.homeImageContainer}>
            <Image
              style={styles.homeImage}
              source={require('../assets/images/jeu-du-haka-logo-200x200.png')}
            />
          </View>
          <View style={styles.startButtonContainer}>
            <Button
              style={styles.startButton}
              title={'Démarrer'}
              onPress={() => this.props.navigation.navigate('Second')}
            >
              Démarrer
            </Button>
          </View>
          <View style={styles.websites} />
          <Text
            style={styles.websiteLink}
            title={'www.jeuduhaka.com'}
            onPress={() => Linking.openURL('https://www.jeuduhaka.com')}
          >
            www.jeuduhaka.com
          </Text>
          <Text
            style={styles.websiteLink}
            title={'www.marckucharz.com'}
            onPress={() => Linking.openURL('http://www.marckucharz.com')}
          >
            www.marckucharz.com
          </Text>
          <Text
            style={styles.websiteLink}
            title={'www.ludocoaching.com'}
            onPress={() => Linking.openURL('http://www.ludocoaching.com')}
          >
            www.ludocoaching.com
          </Text>
          <View style={styles.copyrightContainer}>
            <Text style={styles.copyright}>
              © Le Jeu du Haka - Tous droits réservés
            </Text>
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
    flex: 1,
    paddingTop: '5%'
  },
  title: {
    fontSize: 40,
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
    alignSelf: 'none',
    fontFamily: 'charcuterie-sans-inline',
    backgroundColor: '#000'
  },
  websites: { flex: 1, alignItems: 'center' },
  websiteLink: {
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  copyrightContainer: { flex: 1, paddingTop: '5%' },
  copyright: { backgroundColor: 'transparent', alignSelf: 'center' }
};
