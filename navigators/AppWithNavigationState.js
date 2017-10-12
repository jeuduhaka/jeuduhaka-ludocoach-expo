import React from '/utils/enhancedReact';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import { AppNavigator } from './AppNavigator';

//ref https://reactnavigation.org/docs/guides/redux#Handling-the-Hardware-Back-Button-in-Android
class AppWithNavigationState extends React.Component {
  constructor(props) {
    super(props);

    this.onBackPress = this.onBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress() {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    dispatch(UndoActionCreators.undo());
    return true;
  }

  render() {
    const { dispatch, nav, language } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
    });

    return <AppNavigator navigation={navigation} screenProps={{ language }} />;
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
  language: state.language,
});

export default connect(mapStateToProps)(AppWithNavigationState);
