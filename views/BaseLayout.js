/**
 * Created by ruimin on 16/2/27.
 */

'use strict';

import React from 'react';

class BaseLayout extends React.Component {
  render() {
    return this.props.children;
  }
}

module.exports = BaseLayout;
