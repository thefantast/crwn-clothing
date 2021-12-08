import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer.js';

//put logger the function from redux logger in a array (dynamic)
const middlewares = [logger];

// we do this that is more scalable. Pot the logger function in applyMiddleware
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;

