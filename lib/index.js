'use strict';

const Doggyx = require('./doggyx');

const o = {
    actors: require('./actor'),
    categories: require('./category'),
    channels: require('./channel'),
    dvds: require('./dvd'),
    videos: require('./video')
};

Object.defineProperties(o, {
    "format": {
        configurable: false,
        enumerable: false,
        get: function() {
            return Doggyx.format;
        },
        set: function(value) {
            Doggyx.format = value;
        }
    },
    "proxy": {
        configurable: false,
        enumerable: false,
        get: function() {
            return Doggyx.proxy;
        },
        set: function(value) {
            Doggyx.proxy = value;
        }
    }
});

module.exports = o