import { REHYDRATE } from 'redux-persist/src/constants';

import I18n from '../i18n/';
import { ASSETS_LOADED } from '../actions/types';
import { isPersistedStateInvalid } from '/config/configureStore';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case REHYDRATE:
    //   console.log('Lang rehydration');
    //   console.log(action.payload);
    //   console.log('test');
    // return action.payload.language;
    case ASSETS_LOADED:
      return action.assetsLoaded;
    default:
      return state;
  }
};
