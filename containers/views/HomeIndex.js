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
    let result = null;

    return (
      <div className="container">
        <div className="search-area">
          <InputGroup contiguous>
            <InputGroup.Section grow>
              <FormInput ref="query" type="text" placeholder="Search" />
            </InputGroup.Section>
            <InputGroup.Section>
              <Button onClick={this._search.bind(this)}>Go!</Button>
            </InputGroup.Section>
          </InputGroup>
        </div>
        <div className="search-result">
          {result}
        </div>
      </div>
    );
  }

  _search() {
    console.log(this.refs.query.val());
    let query = this.refs.query.val();
    let page = 1;

    fetch(`http://127.0.0.1:40001/search?query=${query}&page=${page}`, {mode: 'cors'})
      .then((res) => {
        if (res.status != 200) {
          alert(`Network error! err_code = ${res.status}`);
        } else {
          res.json().then((data) => {
            this.data = data;
            this.setState({
              dataSource: this.ds.cloneWithRows(this.data.items),
            });
          });
        }
      });
  }
}

module.exports = HomeIndex;
