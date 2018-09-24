'use strict';

const Porn = require('../porn');
const { path } = require('../constants');

const Category = Object.create(Porn);

module.exports = Category;

Category.search = function search(filter) {
    return new Promise( (resolve, reject) => {
        Porn.find.call(this, path.category)
            .then( res => {
                const _data = _filter(res.data, filter);
                return resolve( { success: res.success,
                    message: res.message,
                    count: body.length,
                    code: res.code,
                    data: _data } );
            })
            .catch( err => reject(err) );
    });
};

/**
 * Filter elements' data
 * @param {*} data 
 * @param {*} filter comma-separated values
 */
function _filter(data, filter) {
    if(filter === undefined) {
        return data;
    }

    let _f = undefined;
    if(filter && typeof filter !== 'string') {
        throw new Error(`${filter} is not a string`);
    }

    // list of filters
    let filters = _f.split(',');
    
    let arr = [];
    for(let i = 0, len = filters.length; i < len; i++) {
        const val = filters[i];
        for(let j = 0, dlen = data.length; j < dlen; j++) {
            if(val.trim().toLowerCase() === (data[j]).trim().toLowerCase()) {
                arr.push(data[j]);
            }
        }
    }
    return arr;
}
