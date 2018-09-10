'use strict';

module.exports = Video;

const { URL } = require('url');

const request = require('../request');
const Porn = require('../porn');
const { videoPath } = require('../constants').path;
const _inheritsProto = require('../utils/_inherits');
const log = require('../log');

function Video(_format) {
  // call super()
  Porn.call(this, _format);
};
// Prototype Inheritance
_inheritsProto(Video, Porn);

// prototype properties
Video.prototype.find = function(params) {};
Video.prototype.isActive = function(params){};
Video.prototype.deleted = function(params) {};

