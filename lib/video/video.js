'use strict';

module.exports = Video;

const Porn = require('../porn');
const { path } = require('../constants');
const _inheritsProto = require('../utils/_inherits');

function Video(_format) {
  // call super()
  Porn.call(this, _format);
};
// Prototype Inheritance
_inheritsProto(Video, Porn);

// prototype properties

/**
 * 
 * @param {*} params 
 */
Video.prototype.find = function(params) {
  return Porn.prototype.find.call(this, path.video.find, params);
};

/**
 * 
 * @param {*} params 
 */
Video.prototype.isActive = function(params){
  let _params = { id: null };
  if(params && typeof params == 'number') {
    _params.id = params;
  }

  if(params && typeof params == 'object') {
    _params.id = params[Object.keys(params)[0]]
  }
  return Porn.prototype.find.call(this, path.video.isActive, _params);
};