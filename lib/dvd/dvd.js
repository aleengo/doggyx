'use strict';

const Porn = require('../porn');
const { path } = require('../constants');

const Dvd = Object.create(Porn);

module.exports = Dvd;

Dvd.search = function search(params) {
  return Porn.find.call(this, path.dvd, params);
};