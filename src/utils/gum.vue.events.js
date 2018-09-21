'use strict';
import Vue from 'vue';

function Events () {
    this.events = new Vue();
}

Events.prototype.emit = function (a, b) {
    this.events.$emit(a, b);
}

Events.prototype.on = function (a, b) {
    this.events.$on(a, b);
}

Events.prototype.validate = function () {
    var errors = [];
    this.events.$emit('validate', errors);

    return errors;
}

Events.prototype.fieldErrors = function (errors) {
    this.events.$emit('fielderrors', errors);
}

Events.prototype.toast = function (msg) {
    this.events.$emit('toast', msg);
}

Events.prototype.toastClear = function () {
    this.events.$emit('toast-clear');
}

export default new Events();
