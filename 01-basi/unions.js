"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var punteggio = 30;
punteggio = "30";
var user = {
    _id: "1",
    nome: "Mario",
    cognome: "Rossi",
    role: "user",
};
var admin = {
    _id: "1",
    nome: "Mario",
    cognome: "Rossi",
    role: "admin",
    test: "test",
};
var fn = function (param) {
    if (typeof param === "string") {
        return param.toUpperCase();
    }
    else {
        return param.toFixed(2);
    }
};
