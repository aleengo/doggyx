'use strict';

const { URL } = require('url');
const debug = require('debug')('doggyx:categories:category');

const request = require('../request');
const Porn = require('../porn');
const { path } = require('../constants');
const log = require('../log');

/**
 * Constructor Category
 */
class Category extends Porn {
    constructor(_format) {
        super(_format);
    }

    find() {
        let _url = new URL(`${this.baseUrl}${path.category}${this.format}`);
        log('url', _url.toString());
    }
}

module.exports = Category;