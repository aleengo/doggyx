'use strict';

const { URL } = require('url');
const qs = require('querystring');

const Doggyx = require('./doggyx');
const request = require('./request');

const Porn = Object.create(Doggyx);

Object.defineProperties(Porn, {
    "baseUrl": {
        configurable: false,
        enumerable: false,
        writable: false,
        value: 'https://api.porn.com/'
    }
});

/**
 * 
 * @param {*} url 
 */
const _request = function _request(url, options) {
    
    
};

/**
 * 
 * @param {*} path 
 * @param {*} params 
 */
Porn.find = function find(path, params) {

    if(params && typeof params !== 'object') {
        throw new Error('params must be an object');
    }
    
    let options = {
        proxy: this.proxy
    };
    
    const url = this.buildUrl(path, params);
    return new Promise( (resolve, reject) => {
        request(url, options)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });      
};

/**
 * Build a url based on params
 * @param {*} params { Object }
 * returns a string
 */
Porn.buildUrl = function buildUrl(path, params) {
    let _url = `${this.baseUrl}${path}${this.format}`;

    if(params && typeof params !== 'object') {
        throw new Error('params must be an object');
    }

    if(params) {
        _url += `?${qs.stringify(params)}`;
    }
    return _url;
};


module.exports = Porn;