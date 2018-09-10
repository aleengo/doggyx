'use strict';

module.exports = Porn;

const { checkFormat } = require('./utils/utils');

// Private attributes
let format = undefined;

function Porn(_format = 'json') {
    format = _format;
}

Object.defineProperties(Porn.prototype, {
    "baseUrl": {
        configurable: false,
        enumerable: false,
        writable: false,
        value: 'https://api.porn.com/'
    },
    "format": {
        configurable: false,
        enumerable: false,
        get: function() {
            return format;
        },
        set: function(value) {
            checkFormat(value);
            format = value;
        }
    }
});