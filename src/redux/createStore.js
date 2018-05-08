// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const composeEnhancers = __DEV__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  if (__DEV__) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }

  return store;
};
