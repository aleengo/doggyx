'use strict';

module.exports = _inheritsProto;

function _inheritsProto (Child, Parent) {
   
    if(typeof(Child) !== 'function') {
        throw new Error(`${Child.toString()} may only be a Function`);
    }

    if (typeof(Parent) !== 'function') {
        throw new Error(`${Parent.toString()} may only be a Function`);
    }
 
    // inherits methods and properties from Parent object
    const parentProto = Parent.prototype;
    Child.prototype = Object.create(parentProto);
    Child.prototype.constructor = Child;
}