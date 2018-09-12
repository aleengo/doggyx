'use strict';

module.exports = Category;


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
    let _url = this.buildUrl(path.category);
    return new Promise( (resolve, reject) => {
        request(_url)
            .then( res => {
                const body = _filter(res.body, filter);
                
                const metadata = res.metadata;
                metadata.count = body.length;

                return resolve( { metadata, body } )
            })
            .catch( err => reject(err) );
    });
};

/**
 * Filter elements' data
 * @param {*} data 
 * @param {*} filter 
 */
function _filter(data, filter) {
    if(filter === undefined) {
        return data;
    }

    let _f = undefined;
    if(filter && typeof filter === 'string') {
        _f = filter;
    }

    if(filter && typeof filter === 'object' && Object.keys(filter).length > 0) {
        _f = filter[Object.keys(filter)[0]];
    }

    // list of filters
    let filters = _f.split(',');
    
    let arr = [];
    for(let i = 0; i < filters.length; i++) {
        const val = filters[i];
        for(let j = 0; j < data.length; j++) {
            if(val.trim().toLowerCase() === (data[j]).trim().toLowerCase()) {
                arr.push(data[j]);
            }
        }
    }
    return arr;
}
