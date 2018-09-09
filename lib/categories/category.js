'use strict';

const { URL } = require('url');
const debug = require('debug')('doggyx:categories:category');

const _inherits = require('../_inherits');
const request = require('../request');
const Porn = require('../porn');
const { path } = require('../constants');
const log = require('../log');

/**
 * Constructor Category
 */
const Category = function Category(_format) {
    Porn.call(this, _format);
};
//_inherits();
Category.prototype = Object.create(Porn.prototype);
Category.prototype.constructor = Category;

//log('_inherits', _inherits(Category, Porn));
log('path', path);
Category.prototype.find = function() {
    const self = this;
    let _url = new URL(`${self.baseUrl}${path.category}${self.format}`);
    log('url', url.toString());

    request(_url);;
    
}

module.exports = Category;