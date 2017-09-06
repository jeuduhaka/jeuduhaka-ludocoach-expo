import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

import * as ActionTypes from '../actions/types';

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

function findRouteKey({ routes, routeName }) {
  let key = null;
  const routeObj = routes.find(r => r.routeName === routeName);

  if (routeObj) {
    key = { key: routeObj.key };
  }

  return key;
}

export default (state = INITIAL_STATE, action) => {
  let nextState;
  // console.log(`nav action: ${action.type}`);

  switch (action.type) {
    case ActionTypes.GAME_MODE_CHOSEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Deck' }),
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
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ConfirmCard' }),
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
        NavigationActions.back(
          findRouteKey({
            routes: state.routes,
            routeName: 'ChooseCardGrid'
          })
        ),
        state
      );
      break;
    case ActionTypes.CARD_CANCELLED:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
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
    // case ActionTypes.LUDOCOACH_LAUNCHED:
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.navigate({ routeName: 'Video' }),
    //     state
    //   );
    //   break;
    case 'CHOOSE_CARD':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Deck' }),
        state
      );
      break;
    case 'PLAY_VIDEO':
      nextState = AppNavigator.router.getStateForAction(
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
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(
          findRouteKey({
            routes: state.routes,
            routeName: 'Deck'
          })
        ),
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
