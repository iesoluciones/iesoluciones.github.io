"use strict";
var types_1 = require("utils/types");
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.email = function (control) {
        var exp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (!types_1.isNullOrUndefined(control.value) && control.value !== "" && !exp.test(control.value)) {
            return { 'email': true, 'currentValue': control.value };
        }
        return null;
    };
    CustomValidators.telefono = function (control) {
        var exp = /^\+\d{2,3}\s\d{10}$/;
        if (!types_1.isNullOrUndefined(control.value) && !exp.test(control.value)) {
            return { 'telefono': true, 'currentValue': control.value };
        }
        return null;
    };
    CustomValidators.celular = function (control) {
        var exp = /^[0-9]{10}$/;
        if (!types_1.isNullOrUndefined(control.value) && control.value !== "" && !exp.test(control.value)) {
            return { 'celular': true, 'currentValue': control.value };
        }
        return null;
    };
    CustomValidators.password = function (control) {
        var exp = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        if (!types_1.isNullOrUndefined(control.value) && control.value !== "" && !exp.test(control.value)) {
            return { 'password': true, 'currentValue': control.value };
        }
        return null;
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
