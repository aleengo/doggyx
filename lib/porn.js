'use strict';

module.exports = Porn;

const { URL } = require('url');
const qs = require('querystring');

const { checkFormat } = require('./utils/utils');
const request = require('./request');
const log = require('./log');

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
 * 
 * @param {*} url 
 */
const _request = function _request(url) {
    return new Promise( (resolve, reject) => {
        request(url)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

/**
 * 
 * @param {*} path 
 * @param {*} params 
 */
Porn.prototype.find = function find(path, params) {
    if(params && typeof params != 'object') {
        throw new Error('params must be an object');
    }
    let _params = params || {};
    
    const _url = this.buildUrl({
        path: path,
        qsearch: _params
    });
    log(_url);
    return _request(_url);      
};

/**
 * Build a url based on params
 * @param {*} params { String | Object }
 */
Porn.prototype.buildUrl = function buildUrl(params) {
    let _url = `${this.baseUrl}`;

    if(!params) {
        throw new Error(`arguments can be undefined`);
    }
    
    if(typeof params == 'string') {
        const path = params;
        return new URL(_url + `${path}${this.format}`);
    }

    if(params && typeof params == 'object' && Object.keys(params).length === 0) {
        throw new Error(`${params} has no properties defined.`);
    }

    const keys = Object.keys(params);
    _url += `${params[keys[0]]}${this.format}`;
    if(keys.length === 2) {
        _url += `?${qs.stringify(params[keys[1]])}`;
    }
    return new URL(_url);
};