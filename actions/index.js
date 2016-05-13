'use strict';

// export const searchQuery = (query) => {
//   console.log('-->searchQuery:', query);
//   return {
//     type: 'SEARCH_QUERY',
//     query,
//   }
// };

module.exports = {
  searchQuery(query) {
    console.log('-->action.searchQuery:', query);
    return {
      type: 'SEARCH_QUERY',
      query,
    }
  },
  test(){
    return {
      type: 'SEARCH_QUERY',
      query,
    }
  }
}
