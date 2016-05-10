/**
 * Created by ruimin on 16/5/10.
 */

'use strict';

import React, {Component} from 'react';
import {
  InputGroup,
  FormInput,
  Button
} from 'elemental';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="search-area">
          <InputGroup contiguous>
            <InputGroup.Section grow>
              <FormInput type="text" placeholder="Search" />
            </InputGroup.Section>
            <InputGroup.Section>
              <Button>Go!</Button>
            </InputGroup.Section>
          </InputGroup>
        </div>
      </div>
    );
  }
}

module.exports = HomeIndex;
