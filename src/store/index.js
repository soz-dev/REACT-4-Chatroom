/**
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import socketMiddleware from 'src/store/socketMiddleware';
import { websocketConnect } from 'src/store/reducers/settings';
import reducers from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(socketMiddleware),
);

/**
 * Store
 */
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  enhancers,
);
/* eslint-enable */

// je peux dispatcher une action juste après avoir créer le store
store.dispatch(websocketConnect());

/**
 * Export
 */
export default store;
