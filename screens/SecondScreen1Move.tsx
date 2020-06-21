import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import i18n from '../i18n';
import SecondScreen from './SecondScreen';
import { secondScreen1MovePassed } from '../actions';
import { useNavigation } from '@react-navigation/native';

const SecondScreen1Move = (onPress: () => void) => {
  const navigation = useNavigation();

  return (
    <SecondScreen
      textContent={i18n.t('oneMoveDescription')}
      buttonOnPress={() => {
        onPress();
        navigation.navigate('ChooseCardGrid');
      }}
    />
  );
};

// TODO specify any
const mapStateToProps = (state: any) => ({});

// TODO specify any
const mapDispatchToProps = (dispatch: any) => {
  return {
    onPress: () => {
      // dispatch(UndoActionCreators.clearHistory());
      dispatch(secondScreen1MovePassed());
    },
    // onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

// TODO fix type issue
export default enhance(SecondScreen1Move);
