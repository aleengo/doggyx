'use strict';

const { URL } = require('url');

const Porn = require('../porn');
const { actorPath } = require('../constants').path;
const _inheritsProto = require('../utils/_inherits');

const log = require('../log');

module.exports = Actor;

function Actor(_format) {
  Porn.call(this, _format);
}
_inheritsProto(Actor, Porn);

Actor.prototype.find = function(params) {};