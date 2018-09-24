'use strict';

const Porn = require('../porn');
const { path } = require('../constants');

const Channel = Object.create(Porn);

module.exports = Channel;

Channel.search = function search(params) {
  return Porn.find.call(this, path.channel, params);
};

