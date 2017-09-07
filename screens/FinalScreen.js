import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { Button } from '../components/common';

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
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.titleFirst}>
              Bravo, vous avez activé votre Mana ! Les autres joueurs vont
              maintenant vous noter avec leurs ressentis de votre expression
              corporelle.
            </Text>
          </View>
          <View style={styles.startButtonContainer}>
            <Button
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Deck')}
            >
              Je réactive mon Mana
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
