'use strict';

const Porn = require('../porn');
const { path } = require('../constants');

const Video = Object.create(Porn);

module.exports = Video;

/**
 * 
 * @param {*} params 
 */
Video.search = function search(params) {
  return Porn.find.call(this, path.video.find, params);
};

Video.isActive = function isActive(params) {
  return Porn.find.call(this, path.video.isActive, params);
};

