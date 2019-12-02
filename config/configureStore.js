import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import persistStore from '../utils/persistStore';

import reducer from '../reducers';

export function isPersistedStateInvalid(state) {
  return Object.keys(state).length === 0;
}

export default initialState => {
  /* eslint-disable no-undef */
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window === 'object' && __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const middlewares = [];

  if (__DEV__) {
    // Seamless-Immutable logger cleanup
    // const stateTransformer = state => {
    //   if (
    //     typeof state === 'object' &&
    //     state !== null &&
    //     Object.keys(state).length
    //   ) {
    //     const newState = {};
    //     for (var i of Object.keys(state)) {
    //       if (state[i].asMutable)
    //         newState[i] = state[i].asMutable({ deep: true });
    //       else newState[i] = state[i];
    //     }
    //     return newState;
    //   } else {
    //     return state;
    //   }
    // };
    // const loggerMiddleware = require('redux-logger').default;
    // middlewares.push(loggerMiddleware);
  }
  /* eslint-enable no-undef */
  /* eslint-enable no-underscore-dangle */

  const rehydrateLog = !!__DEV__;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
    autoRehydrate({
      log: rehydrateLog,
    })
  );

  const Store = createStore(reducer, initialState, enhancer);

  Store.rehydrateAsync = () => {
    return new Promise(resolve => {
      persistStore(
        Store,
        {
          storage: AsyncStorage,
          debounce: 500,
          blacklist: ['gameMode', 'nav', 'cards'],
        },
        () => {
          resolve();
        }
      );
    });
  };

  Store.subscribe(() => {
    // __DEV__ && console.log(`assetsLoaded: ${Store.getState().assetsLoaded}`);
    //   console.log(Store.getState().gameMode);
  });

  if (module && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;

      Store.replaceReducer(nextRootReducer);
    });
  }

  return Store;
};
