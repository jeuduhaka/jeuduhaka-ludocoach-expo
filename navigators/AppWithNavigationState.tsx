import React from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import {
  NavigationContainer,
  CommonActions,
  useFocusEffect,
  useNavigationState,
  useNavigation,
} from '@react-navigation/native';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import { AppNavigator } from './AppNavigator';

/**
 *
 * @see https://reactnavigation.org/docs/custom-android-back-button-handling/
 */
function AppWithNavigationState() {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onBackPress = () => {
  //       const navigation = useNavigation();
  //       const index = useNavigationState((state) => state.index);

  //       if (index === 0) {
  //         return false;
  //       }

  //       navigation.dispatch(CommonActions.goBack());
  //       navigation.dispatch(UndoActionCreators.undo());
  //       return true;
  //     };

  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);

  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   }, [])
  // );

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default AppWithNavigationState;
