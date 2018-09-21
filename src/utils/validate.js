'use strict';

import required from '../validator/require.validator';
import tel from '../validator/tel.validator';
import number from '../validator/number.validator';
import idcard from '../validator/idcard.validator';
import email from '../validator/email.validator';

const validators = {
  tel, number, idcard, email,
}

function Validate (options) {
    options = options || {};

    this.validators = [];
    this.messages   = [];
    this.label      = options.label || '';
    this.required   = options.required ? true : false;


    var self = this;

    Object.prototype.toString.call(options.rules) === '[object Array]'
    && options.rules.forEach(function (rule) {
        var validator = validators[rule];
        validator && self.validators.push(validator);
    });
}

Validate.prototype.add = function (vname) {
    var validator = validators[vname];
    validator && this.validators.push(validator);
}

Validate.prototype.required = function (required) {
    this.required = required;
}

Validate.prototype.label = function (label) {
    this.label = label || '';
}

Validate.prototype.validate = function (value) {
    var messages = [], label = this.label;

    function validate (value, validator, label, messages) {
        var ret = validator.validate(value);
        ret && messages.push(ret.replace('{label}', label));
    }

    this.required && (function () {
        validate(value, required, label, messages);
    })();

    this.validators.forEach(function (validator) {
        validate(value, validator, label, messages);
    });

    this.messages = messages;

    return messages.length === 0;
}

Validate.prototype.errors = function () {
    return this.messages;
}

export default Validate;