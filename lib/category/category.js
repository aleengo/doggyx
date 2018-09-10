'use strict';

module.exports = Category;

const { URL } = require('url');
const debug = require('debug')('doggyx:categories:category');

const request = require('../request');
const Porn = require('../porn');
const { categoryPath } = require('../constants').path;
const _inheritsProto = require('../utils/_inherits');
const log = require('../log');

function Category(_format) {
    Porn.call(this, _format);
};
_inheritsProto(Category, Porn);

Category.prototype.find = function (params) {};

