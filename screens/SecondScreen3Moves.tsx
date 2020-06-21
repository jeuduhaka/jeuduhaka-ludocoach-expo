import React from 'react';
import { Text, Image, Linking, View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';

import i18n from '../i18n';
import SecondScreen from './SecondScreen';
import { secondScreen3MovesPassed } from '../actions';
import { useNavigation } from '@react-navigation/native';

const SecondScreen3Moves = (onPress: () => void) => {
  const navigation = useNavigation();

  return (
    <SecondScreen
      textContent={[
        i18n.t('chooseCards'),
        ' ',
        <Text key="text-1" style={{ color: '#B8282E' }}>
          1.{i18n.t('having')}
        </Text>,
        ' ',
        <Text key="text-2" style={{ color: '#F7941C' }}>
          2.{i18n.t('doing')}
        </Text>,
        ' ',
        <Text key="text-3" style={{ color: '#39B549' }}>
          3.{i18n.t('being')}
        </Text>,
      ]}
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
      dispatch(secondScreen3MovesPassed());
    },
    // onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

// TODO fix type issue
export default enhance(SecondScreen3Moves);
