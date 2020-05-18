import { CommonActions as NavigationActions } from '@react-navigation/native';
import { AppNavigator } from '../navigators/AppNavigator';
import { StackRouter } from '@react-navigation/native';

import * as ActionTypes from '../actions/types';

const router = StackRouter({ initialRouteName: 'Home' });

const INITIAL_STATE = router.getStateForAction(NavigationActions.init());

export default (state = INITIAL_STATE, action: any) => {
  let nextState;
  let route;
  // console.log(action);
  // console.log(`nav action: ${action.type}`);
  // console.log(state);

  switch (action.type) {
    case ActionTypes.GAME_MODE_CHOSEN:
      switch (action.gameMode) {
        case ActionTypes.GAME_MODE_1_MOVE:
          route = 'Second1Move';
          break;
        default:
          route = 'Second3Moves';
          break;
      }

      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: route }),
        state
      );
      break;
    case ActionTypes.SECOND_SCREEN_3_MOVES_PASSED:
      nextState = router.getStateForAction(
        NavigationActions.navigate('Deck'),
        state
      );
      break;
    case ActionTypes.SECOND_SCREEN_1_MOVE_PASSED:
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ChooseCardGrid' }),
        state
      );
      break;
    case ActionTypes.DECK_PRESSED:
      nextState = router.getStateForAction(
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

      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: route }),
        state
      );
      break;
    case ActionTypes.CARD_CONFIRMED:
      nextState = router.getStateForAction(
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
    // case ActionTypes.CARD_CANCELLED:
    //   nextState = router.getStateForAction(NavigationActions.back(null), state);
    //   break;

    case ActionTypes.ALL_CARDS_CONFIRMED:
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'AfterCards' }),
        state
      );
      break;
    case ActionTypes.AFTER_CARDS_BUTTON_PRESSED:
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Deck' }),
        state
      );
      break;
    case ActionTypes.SELECTED_CARD_PRESSED:
      nextState = router.getStateForAction(
        // NavigationActions.navigate({ routeName: 'GesturesText' }),
        NavigationActions.navigate({ routeName: 'Video' }),
        state
      );
      break;
    case ActionTypes.VIDEO_ENDED:
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Deck' }),
        state
      );
      break;
    case ActionTypes.ALL_VIDEOS_ENDED:
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Final' }),
        state
      );
      break;
    case ActionTypes.BACK_HOME:
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case ActionTypes.GO_BACK:
      nextState = router.getStateForAction(NavigationActions.back(), state);
      break;
    default:
      nextState = router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  // console.log('nav State');
  // console.log(nextState || state);
  return nextState || state;
};
