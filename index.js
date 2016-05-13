'use strict';

import 'babel-polyfill';
import React from 'react';

import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import BaseLayout from './containers/BaseLayout';
import HomeIndex from './containers/HomeIndex';

import reducers from './reducers';

// <Route path="*" component={NoMatch}/>

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

console.log('reducers', reducers);

const store = createStore(
  reducer
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  (
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/" component={BaseLayout}>
          <IndexRoute component={HomeIndex} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('wechat_container')
);
