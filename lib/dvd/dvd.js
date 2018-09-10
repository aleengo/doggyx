'use strict';

module.exports = Dvd;

const { URL } = require('url');

const Porn = require('../porn');
const _inheritsProto = require('../utils/_inherits');
const { dvdPath } = require('../constants').path;

const log = require('../log');

function Dvd(_format) {
  Porn.call(this, _format);
};
_inheritsProto(Dvd, Porn);

Dvd.prototype.find = function(params) {};