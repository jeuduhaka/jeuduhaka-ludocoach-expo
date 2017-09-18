import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

import * as ActionTypes from '../actions/types';
import { findRouteKey } from '../utilities/helpers';

// Help: https://github.com/react-community/react-navigation/tree/master/examples/ReduxExample
// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Home');
// const initialNavState = AppNavigator.router.getStateForAction(secondAction, tempNavState);

// const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
// const firstAction = AppNavigator.router.getActionForPathAndParams('CheckingAssets');
// const INITIAL_STATE = AppNavigator.router.getStateForAction(firstAction);

const INITIAL_STATE = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

export default (state = INITIAL_STATE, action) => {
  let nextState;
  let route;
  // console.log(action);
  // console.log(`nav action: ${action.type}`);
  // console.log(state);

  switch (action.type) {
    case ActionTypes.GAME_MODE_CHOSEN:
      switch (action.gameMode) {
        case ActionTypes.GAME_MODE_1_MOVE:
          route = 'ChooseCardGrid';
          break;
        default:
          route = 'Second';
          break;
      }

      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: route }),
        state
      );
      break;
    case ActionTypes.DECK_PRESSED:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ChooseCardGrid' }),
        state
      );
      break;
    case ActionTypes.CARD_PRESSED:
      switch (action.gameMode) {
        case ActionTypes.GAME_MODE_1_MOVE:
          route = 'Video';
          break;
        default:
          route = 'ConfirmCard';
          break;
      }

      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: route }),
        state
      );
      break;
    case ActionTypes.CARD_CONFIRMED:
      nextState = AppNavigator.router.getStateForAction(
        // NavigationActions.reset({
        //   index: 1,
        //   actions: [
        //     NavigationActions.navigate({ routeName: 'Home' }),
        //     NavigationActions.navigate({ routeName: 'Deck' }),
        //   ]
        // }),
        // NavigationActions.back(
        //   findRouteKey({
        //     routes: state.routes,
        //     routeName: 'ChooseCardGrid'
        //   })
        // ),
        NavigationActions.navigate({ routeName: 'Deck' }),
        state
      );
      break;
    case ActionTypes.CARD_CANCELLED:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;

    case ActionTypes.ALL_CARDS_CONFIRMED:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'AfterCards' }),
        state
      );
      break;
    case ActionTypes.SELECTED_CARD_PRESSED:
      nextState = AppNavigator.router.getStateForAction(
        // NavigationActions.navigate({ routeName: 'GesturesText' }),
        NavigationActions.navigate({ routeName: 'Video' }),
        state
      );
      break;
    case ActionTypes.VIDEO_ENDED:
      nextState = AppNavigator.router.getStateForAction(
        // NavigationActions.navigate({ routeName: 'Deck' }),
        NavigationActions.back(
          findRouteKey({
            routes: state.routes,
            routeName: 'Video'
          })
        ),
        state
      );
      break;
    case ActionTypes.ALL_VIDEOS_ENDED:
      switch (action.gameMode) {
        case ActionTypes.GAME_MODE_1_MOVE:
          route = 'First';
          break;
        default:
          route = 'Final';
          break;
      }
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: route }),
        state
      );
      break;
    case ActionTypes.BACK_HOME:
      switch (action.gameMode) {
        case ActionTypes.GAME_MODE_1_MOVE:
          route = 'ChooseCardGrid';
          break;
        default:
          route = 'Second';
          break;
      }
      nextState = AppNavigator.router.getStateForAction(
        // NavigationActions.navigate({ routeName: 'Deck' }),
        NavigationActions.back(
          findRouteKey({
            routes: state.routes,
            routeName: route
          })
        ),
        state
      );
      break;
    case ActionTypes.GO_BACK:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  // console.log('nav State');
  // console.log(nextState || state);
  return nextState || state;
};
