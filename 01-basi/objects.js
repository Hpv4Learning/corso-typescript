"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    nome: "Anna",
    cognome: "Da Roma",
    mail: "anna@evviva.it",
    isPaid: true,
};
var createUser = function (_a) {
    var nome = _a.nome, cognome = _a.cognome, isPaid = _a.isPaid;
    return { nome: nome, cognome: cognome, isPaid: isPaid };
};
createUser({ nome: "Vittorio", cognome: "Do Roma", isPaid: true });
createUser(user);
var user2 = {
    nome: "Anna",
    cognome: "Da Roma",
    mail: "anna@evviva.it",
    isPaid: true,
};
var user3 = {
    nome: "Anna",
    cognome: "Da Roma",
    isPaid: true,
};
var appUser = {
    _id: "123",
    nome: "Anna",
    cognome: "Da Roma",
    isPaid: true,
};
var corso = {
    _id: "123",
    nome: "Corso di React",
    descrizione: "Corso di React",
    prezzo: 100,
};
var buyCourse = function (user, corso) {
    var _a, _b;
    if (!user.isPaid)
        return;
    if (!user.cardDetails)
        return;
    try {
        (_a = user.pagamenti) === null || _a === void 0 ? void 0 : _a.push({
            _paymentId: Math.random().toString(36).substring(7),
            method: user.cardDetails.numeroCarta,
            importo: corso.prezzo,
            data: new Date(),
        });
        (_b = user.corsi) === null || _b === void 0 ? void 0 : _b.push(corso);
    }
    catch (error) {
        console.error(error);
    }
};
buyCourse(appUser, corso);
var registerUser = function (_a) {
    var nome = _a.nome, cognome = _a.cognome, isPaid = _a.isPaid;
    return {
        _id: Math.random().toString(36).substring(7),
        nome: nome,
        cognome: cognome,
        isPaid: isPaid,
    };
};
var user4 = registerUser(user2);
