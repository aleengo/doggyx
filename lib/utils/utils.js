'use strict';

const { JSON_FORMAT, XML_FORMAT } = require('../constants');

const Utils = {};

module.exports = Utils;

Utils.checkFormat = function(value) {
    if(value !== JSON_FORMAT  && value !== XML_FORMAT) {
        throw new Error(`${value} is not a valid format`);
    }
}



