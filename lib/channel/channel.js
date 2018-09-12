'use strict';

module.exports = Channel;

const Porn = require('../porn');
const _inheritsProto = require('../utils/_inherits');
const { path } = require('../constants');

function Channel(_format) {
  Porn.call(this, _format);
};
_inheritsProto(Channel, Porn);

Channel.prototype.find = function (params) {
  return Porn.prototype.find.call(this, path.channel, params);
};

