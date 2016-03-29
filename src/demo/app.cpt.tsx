/**
 * Created by asher on 2016/3/29.
 */
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux';
import { compose, combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger = require("redux-logger");
import reducer from './reducers';
// import LoginCpt from './component/login.cpt';

const logger = createLogger();
const store = createStore(combineReducers({reducer,routing: routerReducer}), compose(
    applyMiddleware(thunk, logger, routerMiddleware(hashHistory)),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
));
const history = syncHistoryWithStore(hashHistory, store);

