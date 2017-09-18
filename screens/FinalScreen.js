import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
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
        <NavigationHeader />
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
        >
          <View
            style={[styles.titleContainer, styles.navigationHeaderPaddingTop]}
          >
            <Text style={[styles.title, styles.font20px]}>
              Bravo, vous avez activé votre Mana ! Les autres joueurs vont
              maintenant vous noter avec leurs ressentis sur votre expression
              corporelle.
            </Text>
          </View>
          <View style={styles.startButtonContainer}>
            <Button
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('First')}
            >
              Merci
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}
