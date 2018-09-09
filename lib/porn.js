'use strict';

const { checkFormat } = require('./utils/utils');

// Private attributes
let format = undefined;

class Porn {
    constructor(_format = 'json') {
        format = _format;
    }

    get baseUrl() {
        return 'https://api.porn.com/'
    }

    get format() {
        return format;
    }

    set format(value) {
        checkFormat(value);
        format = value;
    }
}

module.exports = Porn;