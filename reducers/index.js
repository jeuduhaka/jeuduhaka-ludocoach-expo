import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import LanguageReducer from './LanguageReducer.js';
import GameModeReducer from './GameModeReducer';
import CardsReducer from './CardsReducer';
import * as ActionTypes from '../actions/types';

const appReducer = combineReducers({
  nav: NavReducer,
  language: LanguageReducer,
  gameMode: GameModeReducer,
  cards: CardsReducer
});

const resetEnabledActionTypes = [
  ActionTypes.ALL_VIDEOS_ENDED,
  ActionTypes.BACK_HOME
];

const rootReducer = (state, action) => {
  let newState = state;

  //reset redux state to initial state
  if (resetEnabledActionTypes.includes(action.type)) {
    newState = undefined;
  } else if (
    state !== undefined &&
    state.nav &&
    action.type === ActionTypes.GO_BACK
  ) {
    //reset redux state when using go back to the home page
    let secondRoute;

    switch (state.gameMode) {
      case ActionTypes.GAME_MODE_1_MOVE:
        secondRoute = 'Second1Move';
        break;
      default:
        secondRoute = 'Second';
        break;
    }

    const currentRoute = newState.nav.routes[newState.nav.index].routeName;

    if (currentRoute === secondRoute) {
      newState = undefined;
    }
  }

  return appReducer(newState, action);
};

export default rootReducer;
