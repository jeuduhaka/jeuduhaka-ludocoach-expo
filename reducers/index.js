import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import { resettableReducer } from 'reduxsauce';

import NavReducer from './NavReducer';
import LanguageReducer from './LanguageReducer.js';
import AssetsLoadedReducer from './AssetsLoadedReducer.js';
import GameModeReducer from './GameModeReducer';
import CardsReducer from './CardsReducer';

import * as ActionTypes from '../actions/types';

// the reducer will be reset when the following action type is passed
const resettable = resettableReducer(ActionTypes.BACK_HOME);

const rootReducer = combineReducers({
  nav: resettable(NavReducer),
  language: LanguageReducer,
  assetsLoaded: AssetsLoadedReducer,
  cards: resettable(undoable(CardsReducer)),
  gameMode: resettable(GameModeReducer),
});

export default rootReducer;
