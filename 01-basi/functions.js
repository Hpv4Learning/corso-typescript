"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDue(param) {
    var newPAram = valueUpperCase(param.toString());
    return newPAram + 2;
}
function valueUpperCase(value) {
    return value.toUpperCase();
}
function singUp(name, email, isPaid) {
}
singUp("David", "Parenzo");
addDue(2);
var getValue = function (value) {
    if (value < 5) {
        return false;
    }
    return value;
};
var logError = function (error) {
    console.error(error);
    return;
};
var logError2 = function (error) {
    if (typeof error === 'string') {
        error.toString();
        throw new Error(error);
    }
    throw new Error('Geneirc error, 500');
};
