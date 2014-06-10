// dependencies
var formElement = require("form-element");
var serialize = require("form-serialize");
var value = require("value");


// single export
module.exports = Form;


/**
 * A helper for working with HTML forms
 *
 * @constructor
 * @param {HTMLFormElement} el
 */
function Form(el) {
    if (!(this instanceof Form)) {
        return new Form(el);
    }

    this.element = el;
}


/**
 * Retrieves an input from the form by name
 *
 * @see http://github.com/dominicbarnes/form-element
 *
 * @param {String} name
 * @returns {HTMLElement}
 */
Form.prototype.input = function (name) {
    return formElement(this.element, name);
};


/**
 * Gets/sets the value for a form input (found by name)
 *
 * @see https://github.com/component/value
 *
 * @param {String} name
 * @param {Mixed} val
 * @returns {Mixed}
 */
Form.prototype.value = function (name, val) {
    var args = [ this.input(name) ];
    if (typeof val !== "undefined") args.push(val);
    return value.apply(null, args);
};


/**
 * Serializes all the inputs of a form into a single JS object
 *
 * @see https://github.com/dominicbarnes/serialize
 *
 * @returns {Object}
 */
Form.prototype.serialize = function (loose) {
    return serialize(this.element, loose);
};
