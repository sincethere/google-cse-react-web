'use strict';

import 'babel-polyfill';
import React from 'react';

import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import BaseLayout from './views/BaseLayout';
import HomeIndex from './views/HomeIndex';

// <Route path="*" component={NoMatch}/>
render(
  (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={BaseLayout}>
        <IndexRoute component={HomeIndex} />
      </Route>
    </Router>
  ),
  document.getElementById('wechat_container')
);
