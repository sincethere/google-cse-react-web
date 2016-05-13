'use strict';

const initialState = {
  searchResult: 'begin'
}

export default function search(state = initialState, action) {
  console.log('-->reducers.action', action);
  switch (action.type) {
    case 'SEARCH_QUERY':
      return Object.assign({}, {query: action.query, searchResult: 'asdf_asdf'});
    default:
      return state;
  }
};
