import I18n from '../i18n/';
import { LANGUAGE_CHANGED } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LANGUAGE_CHANGED:
      return action.language;
    default:
      return state;
  }
};
