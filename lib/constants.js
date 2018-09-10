'use strict';

const Constants = { path: {} };

module.exports = Constants;

Constants['JSON_FORMAT'] = 'json';
Constants['XML_FORMAT'] = 'xml';

Constants.path.category = _find('categories');
Constants.path.actor = _find('actors');
Constants.path.channel = _find('channels');
Constants.path.dvd = _find('dvds');

Constants.path.video = {};
Constants.path.video.find = _find('videos');
Constants.path.video.isActive = 'videos/is-active.';
Constants.path.video.deleted = 'videos/deleted.';

function _find (what) {
  return `${what}/find.`;
}