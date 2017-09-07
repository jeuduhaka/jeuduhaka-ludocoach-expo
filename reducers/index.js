import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import GameModeReducer from './GameModeReducer';
import CardsReducer from './CardsReducer';
import { ALL_VIDEOS_ENDED } from '../actions/types';

const appReducer = combineReducers({
  nav: NavReducer,
  gameMode: GameModeReducer,
  cards: CardsReducer
});

const rootReducer = (state, action) => {
  let newState = state;

  //reset redux state to initial state
  if (action.type === ALL_VIDEOS_ENDED) {
    newState = undefined;
  }

  return appReducer(newState, action);
};

export default rootReducer;
