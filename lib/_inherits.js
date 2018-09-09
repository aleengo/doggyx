'use strict';

const debug = require('debug')('doggyx:_inherits');
const log = require('./log');

module.exports = function(Child, Parent) {
   
        if(typeof(Child) !== 'function' && typeof(Parent) !== 'function') {
            throw new Error(`${Child} and ${Parent} may only be a Function`);
        }
        log('Child', Child);
        log('Parent', Parent);
        log('Parent.prototype', Parent.protototype);
        //log('new parent', new Parent());
        Child.prototype = Object.create(Parent.prototoype);
        Child.protototype.constructor = Child;  
};