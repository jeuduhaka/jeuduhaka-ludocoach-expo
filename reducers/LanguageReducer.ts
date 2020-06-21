// TODO what to do with REHYDRATE
// import { REHYDRATE } from 'redux-persist/src/constants';

import i18n from '../i18n';
import { LANGUAGE_CHANGED } from '../actions/types';

const INITIAL_STATE = null;

export default (
  state = INITIAL_STATE,
  action: {
    type: string;
    language: string;
  }
) => {
  switch (action.type) {
    // TODO what to do with REHYDRATE
    // case REHYDRATE:
    //   console.log('Lang rehydration');
    //   console.log(action.payload);
    //   console.log('test');
    // return action.payload.language;
    case LANGUAGE_CHANGED:
      return action.language;
    default:
      return state;
  }
};
