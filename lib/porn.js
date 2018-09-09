'use strict';

const { checkFormat } = require('./utils/utils');

// Private attributes
let format = undefined;

// Constructor Porn
const Porn = function Porn(_format = 'json') {
    checkFormat(format);
    format = _format;
};

// Define properties 'format' & 'baseUrl'
const properties = {
    'format': {
        configurable: false,
        enumerable: false,
        get: function() {
            return format;
        },
        set: function(value) {
            checkFormat(value);
            format = value;
        }
    },
    'baseUrl': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: 'https://api.porn.com'
    }
};
Object.defineProperties(Porn.prototype, properties);

module.exports = Porn;
