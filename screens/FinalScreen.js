import React from '/utils/enhancedReact';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import I18n from '../i18n';

import { Button } from '../components/common';
import styles from './styles';
// import NavigationHeader from '../components/NavigationHeader';
import BackButton from '../components/BackButton';
import HomeButton from '../components/HomeButton';

import { backHome } from '../actions';

class FinalScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <NavigationHeader tintColor={'#014DA2'} /> */}
        <BackButton tintColor={'#014DA2'} />
        <HomeButton tintColor={'#014DA2'} />
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/fond-bleu-vague-1980x1980.jpg')}>
          <View
            style={[styles.titleContainer, styles.navigationHeaderPaddingTop]}>
            <Text style={[styles.title, styles.font20px]}>
              {I18n.t('manaActivated')}
            </Text>
          </View>
          <View style={styles.startButtonContainer}>
            <Button
              style={styles.startButton}
              onPress={this.props.onThanksPress}>
              {I18n.t('thankYou')}
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
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
