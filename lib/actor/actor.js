'use strict';

const Porn = require('../porn');
const { path } = require('../constants');
const _inheritsProto = require('../utils/_inherits');

module.exports = Actor;

/*const MAX_PAGES = 100;
const SEX_AUTHORIZED_VALUES = ['female', 'male', 'trans'];
const ORDER_AUTHORIZED_VALUES = ['date', 'views', 'name', 'rating', 'favorites'];*/

function Actor(_format) {
  Porn.call(this, _format);
}
_inheritsProto(Actor, Porn);

Actor.prototype.find = function(params) {
  return Porn.prototype.find.call(this, path.actor, params);
};

/*Actor.prototype.findByName = function(params) {
  
  let qsearch = {
    limit: 50,
    'name': null
  };

  if(params && typeof params == 'string' && params.length > 0) {
    qsearch.name = params;
  }

  if(params && typeof params == 'object' && Object.keys(params) > 0) {
    qsearch.name = params.name;
  }

  let _url = new URL(`${this.baseUrl}${path.actor}${this.format}?${qs.stringify(qsearch)}`);
  return new Promise ( (resolve, reject) => {
    request(_url)
      .then(res => {
        if(res.metadata.count === res.body.length) {
          resolve(res);
        } else {
          qsearch.limit = res.result.count;
          _url = new URL(`${this.baseUrl}${path.actor}${this.format}?${qs.stringify(qsearch)}`);
          request(_url)
            .then(res => resolve(res))
            .catch(err => reject(err));
        }
      }).catch(err => reject(err));
  });
};*/

/*Actor.prototype.findBySex = function(params) {
  let _sex = params.sex || 'female';
  if(SEX_AUTHORIZED_VALUES.indexOf(_sex) === -1) {
    throw new Error(`Unsupported value : ${params}`);
  }
};*/

/**
 * Find function
 * @param {*} params 
 */
/*function _find(params) {
  //let _url = new URL(`${}`);
}*/