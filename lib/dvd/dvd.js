'use strict';

module.exports = Dvd;

const Porn = require('../porn');
const _inheritsProto = require('../utils/_inherits');
const { path } = require('../constants');

const log = require('../log');

function Dvd(_format) {
  Porn.call(this, _format);
};
_inheritsProto(Dvd, Porn);

Dvd.prototype.find = function (params) {
  return Porn.prototype.find.call(this, path.dvd, params);
};