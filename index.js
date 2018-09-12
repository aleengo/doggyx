'use strict';

const { Actor, Category, Channel, Dvd, Video } = require('./lib/doggyx');

const v = new Video();
v.find({})
 .then(res => console.info(res))
 .catch(err => console.log(err));

module.exports = require('./lib/doggyx');
