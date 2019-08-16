import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import asyncMiddleware from 'middlewares/async/async';
import stateValidator from 'middlewares/stateValidator/stateValidator';

const enhancers = [];
const middlewares = [
  //thunk,
  asyncMiddleware,
  stateValidator
];

if (process.env.NODE_ENV === 'development') {
  //@ts-ignore
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const persistedState = undefined;
const store = createStore(rootReducer, persistedState, composedEnhancers);

export default store;
