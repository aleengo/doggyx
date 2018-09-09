'use strict';

const Constants = { path: {} };

module.exports = Constants;

Constants['JSON_FORMAT'] = 'json';
Constants['XML_FORMAT'] = 'xml';

Constants.path.category = 'categories/find.';
Constants.path.actor = 'actors/find.';
Constants.path.channel = 'channels/find.';
Constants.path.dvd = 'dvds/find.';

Constants.path.video = {};
Constants.path.video.find = 'videos/find.';
Constants.path.video['is_active'] = 'videos/is-active.';
Constants.path.video.deleted = 'videos/deleted.';