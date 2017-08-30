import { GAME_MODE_CHOSEN } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GAME_MODE_CHOSEN:
      // console.log('CHOOSE GAME MODE');
      // console.log({ ...state, gameMode: action.gameMode });
      return action.gameMode;
    default:
      return state;
  }
};
