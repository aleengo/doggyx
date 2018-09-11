'use strict';

module.exports = Porn;

const { URL } = require('url');

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

/**
 * Build a url based on params
 * @param {*} params 
 */
Porn.prototype.buildUrl = function buildUrl(params) {
    if(!params) {
        throw new Error(`arguments can be undefined`);
    }
    
    if(typeof params != 'object') {
        throw new Error(`${params} must be an object`);
    }

    const keys = Object.keys(params);
    if(params && keys.length === 0) {
        throw new Error(`${params} has no properties defined.`);
    }

    let _url = `${this.baseUrl}${params[keys[0]]}${this.format}`;
    if(keys.length === 2) {
        _url += `?${qs.stringify(params[keys[1]])}`;
    }
    return new URL(_url);
};