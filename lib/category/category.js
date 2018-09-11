'use strict';

module.exports = Category;

const { URL } = require('url');
const debug = require('debug')('doggyx:categories:category');

const request = require('../request');
const Porn = require('../porn');
const { path } = require('../constants');
const _inheritsProto = require('../utils/_inherits');
const log = require('../log');

function Category(_format) {
    Porn.call(this, _format);
};
_inheritsProto(Category, Porn);

Category.prototype.list = function list(filter) {
    let _url = this.buildUrl({path: path.category});
    return new Promise( (resolve, reject) => {
        request(_url)
            .then( res => {
                const metadata = res.metadata;
                const body = _filter(res.body, filter);
                return resolve( { metadata, body } )
            })
            .catch( err => reject(err) );
    });
};

function _filter(data, filter) {
    if(filter === undefined) {
        return data;
    }

    let _f = undefined;
    let arr = [];

    if(filter && typeof filter === 'string') {
        _f = filter;
    }

    if(filter && typeof filter === 'object' && Object.keys(filter).length > 0) {
        _f = filter[Object.keys(filter)[0]];
    }

    // list of filters
    let f = _f.split(',');
    for(let i = 0; i < f.length; i++) {
        const index = data.indexOf(f[i]);
        if(index === -1) {
            throw new Error(`${f[i]} is not available!`);
        }
        arr.push(data[index]);
    }
    return arr
}
