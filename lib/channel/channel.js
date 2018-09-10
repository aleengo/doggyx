'use strict';

module.exports = Channel;

const { URL } = require('url');

const Porn = require('../porn');
const _inheritsProto = require('../utils/_inherits');
const { channelPath } = require('../constants').path;
const log = require('../log');

function Channel(_format) {
  Porn.call(this, _format);
};
_inheritsProto(Channel, Porn);

Channel.prototype.find = function (params) {};

