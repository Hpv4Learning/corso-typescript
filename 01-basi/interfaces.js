"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    _id: 1,
    name: "Mario",
    mail: "m@m.it",
    googleId: "123",
    role: "admin",
    isSuperAdmin: true,
    login: function () {
        return "login";
    },
    logout: function () {
        return "logout";
    },
};
if (user.logout) {
    user.logout("param");
}
