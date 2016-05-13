/**
 * Created by ruimin on 16/5/10.
 */

'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import QueryAction from '../actions';
import {bindActionCreators} from 'redux';
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
    console.log('render:this.props:', this.props);

    let {searchResult, query} = this.props.search;
    console.log('myseach:searchResult:', searchResult, ', query:', query);

    if (this.props.state && this.props.state.searchResult) {
      result = this.props.state.searchResult;
    }

    // console.log(this.props);

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
    console.log('query.val():', this.refs.query.val());
    // let query = this.refs.query.val();
    // let page = 1;
    //
    // fetch(`http://127.0.0.1:40001/search?query=${query}&page=${page}`, {mode: 'cors'})
    //   .then((res) => {
    //     console.log(res.status);
    //   });
    const {searchQuery} = this.props.action;
    searchQuery(this.refs.query.val());
    console.log('this.props:', this.props);



    // console.log('searchQuery', searchQuery);
    // console.log('this.props', this.props);
  }
}

module.exports = connect(
  state => {
    console.log('-->connect.state:', state);
    return {search: state.search};
  },
  // state => {state: state},
  // {searchQuery}
  dispatch => ({action: bindActionCreators(QueryAction, dispatch)})
)(HomeIndex);
