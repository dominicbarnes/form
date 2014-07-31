// dependencies
var classes = require("classes");
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
    this.classes = classes(this.element);
}


/**
 * Retrieves an input from the form by name. If 2 arguments are passed,
 * the first is assumed to be the name of a `<fieldset>`. (which allows
 * only retrieving from a specific subset of elements)
 *
 * @see http://github.com/dominicbarnes/form-element
 *
 * @param {String} [fieldset]  Only search for controls in the named fieldset
 * @param {String} name
 * @returns {HTMLElement}
 */
Form.prototype.input = function (fieldset, name) {
    if (!name) {
        name = fieldset;
        fieldset = null;
    }

    var el = fieldset ? formElement(this.element, fieldset) : this.element;
    return formElement(el, name);
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
 * @see https://github.com/dominicbarnes/form-serialize
 *
 * @param {String} [fieldset]       Only serialize the controls in the named fieldset
 * @param {Function} [transformer]  Apply an interceptor function to the serializer
 * @returns {Object}
 */
Form.prototype.serialize = function (fieldset, transformer) {
    if (typeof fieldset === "function") {
        transformer = fieldset;
        fieldset = null;
    }

    var el = fieldset ? formElement(this.element, fieldset) : this.element;

    return serialize(el, transformer);
};
