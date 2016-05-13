'use strict';

const HOST = 'http://127.0.0.1:40001';

module.exports = {
  search: (query, page) => {
    return fetch(`${HOST}/search?query=${query}&page=${page}`, {mode: 'cors'});
  }
};
