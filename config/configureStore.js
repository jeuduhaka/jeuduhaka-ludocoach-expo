import { applyMiddleware, createStore, compose } from 'redux';

import reducer from '../reducers';

export default initialState => {
  /* eslint-disable no-undef */
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window === 'object' &&
    __DEV__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  const middlewares = [];

  if (__DEV__) {
    // // Seamless-Immutable logger cleanup
    // const stateTransformer = (state) => {
    //   if (typeof state === 'object' && state !== null && Object.keys(state).length) {
    //     const newState = {}
    //     for (var i of Object.keys(state)) {
    //       if (state[i].asMutable) newState[i] = state[i].asMutable({ deep: true })
    //       else newState[i] = state[i]
    //     }
    //     return newState
    //   } else {
    //     return state
    //   }
    // }
    //
    // const createLogger = require('redux-logger').default;
    // middlewares.push(require('redux-logger').default);
  }
  /* eslint-enable no-undef */
  /* eslint-enable no-underscore-dangle */

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  );

  const store = createStore(reducer, initialState, enhancer);

  // store.subscribe(() => {
  //   console.log(store.getState().cards);
  // });

  if (module && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
