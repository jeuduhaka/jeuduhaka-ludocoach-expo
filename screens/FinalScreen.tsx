import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import i18n from '../i18n';

import { Button } from '../components/common';
import styles from './styles';
// import NavigationHeader from '../components/NavigationHeader';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

import { backHome } from '../actions';
import { useNavigation } from '@react-navigation/native';

class FinalScreen extends React.Component<{
  onThanksPress: () => void;
}> {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  static navigationOptions = {
    header: null,
  };

  render() {
    const { onThanksPress } = this.props;
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        {/* <NavigationHeader tintColor={'#014DA2'} /> */}
        <BackButton tintColor={'#014DA2'} />
        <HomeButton tintColor={'#014DA2'} />
        <Image
          style={styles.backgroundOpacity}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}
        />
        <View style={styles.navigationHeader} />
        <View style={styles.contentContainer}>
          <View style={[styles.intermediateScreenTextContainer]}>
            <Text style={[styles.subtitle]}>{i18n.t('manaActivated')}</Text>
            <View style={styles.nextButtonContainer}>
              <Button
                onPress={() => {
                  onThanksPress();
                  navigation.navigate('Home');
                }}>
                {i18n.t('thankYou')}
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// TODO specify any
const mapStateToProps = (state: any) => ({});

// TODO specify any
const mapDispatchToProps = (dispatch: any) => {
  return {
    onThanksPress: () => {
      // dispatch(UndoActionCreators.clearHistory());
      dispatch(backHome());
    },
    // onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(FinalScreen);
