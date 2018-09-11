'use strict';

const Category = require('./category');

const c = new Category();
c.list()
  .then(res => console.log('cat.res', res))
  .catch( err => console.info('cat.error', err) );

module.exports = require('./category');