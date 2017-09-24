import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import { resettableReducer } from 'reduxsauce';

import NavReducer from './NavReducer';
import LanguageReducer from './LanguageReducer.js';
import GameModeReducer from './GameModeReducer';
import CardsReducer from './CardsReducer';

import * as ActionTypes from '../actions/types';

// the reducer will be reset when the following action type is passed
const resettable = resettableReducer(ActionTypes.BACK_HOME);

const appReducer = combineReducers({
  nav: resettable(NavReducer),
  language: LanguageReducer,
  cards: resettable(undoable(CardsReducer)),
  gameMode: resettable(GameModeReducer)
});

export default appReducer;
