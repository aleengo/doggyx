'use strict';

const { checkFormat } = require('./utils/utils');

const Doggyx = {};

let _format = undefined;
let _proxy = undefined;

Object.defineProperties(Doggyx, {
    "format": {
        configurable: false,
        enumerable: false,
        get: function() {
            return _format ? _format : 'json';
        },
        set: function(value) {
            checkFormat(value);
            _format = value;
        }
    },
    "proxy": {
        configurable: false,
        enumerable: false,
        get: function() {
            return _proxy ? _proxy : null;
        },
        set: function(value) {
            _proxy = value;
        }
    }
});

module.exports = Doggyx;










