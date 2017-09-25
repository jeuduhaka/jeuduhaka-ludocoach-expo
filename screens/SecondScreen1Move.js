import React from '/utils/enhancedReact';
import { compose } from 'redux';
import { connect } from 'react-redux';

import I18n from '../i18n';
import SecondScreen from './SecondScreen';
import { secondScreen1MovePassed } from '../actions/';

const SecondScreen1Move = ({ onPress }) => (
  <SecondScreen
    textContent={[I18n.t('oneMoveDescription'), ' ']}
    buttonOnPress={onPress}
  />
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    onPress: () => {
      // dispatch(UndoActionCreators.clearHistory());
      dispatch(secondScreen1MovePassed());
    },
    // onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(SecondScreen1Move);
