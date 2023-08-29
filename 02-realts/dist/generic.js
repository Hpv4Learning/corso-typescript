"use strict";
const identity = (arg) => arg;
const identity2 = (arg) => arg;
let value = identity2("1");
let persona = identity2({ name: "1", age: 1 });
const login = (param) => { };
login(persona);
function identity3(arg) {
    return arg;
}
function identityArray(arg) {
    if (arg.length > 0)
        console.log(arg.length);
    return arg.filter(Boolean);
}
let arr = identityArray([1, 2, 3]);
const doubleGeneric = (arg, arg2) => { };
doubleGeneric(1, "name");
class Carrello {
    value;
    constructor(value) {
        this.value = value;
    }
    add(item) {
        this.value.push(item);
    }
}
const carrello = new Carrello([]);
carrello.add({ id: 1, nome: "1", url: "1" });
