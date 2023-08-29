"use strict";
const a = "3";
const fn = (a) => {
    if (typeof a === "string") {
        return a.toUpperCase();
    }
    return a;
};
const b = {
    a: 2,
};
const fn2 = (a) => {
    if (!a) {
        return;
    }
};
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
const data = new Date(Date.now());
const checkDate = (date) => {
    if (date instanceof Date) {
        return date.toISOString();
    }
    return new Date(date).toISOString();
};
function isFish(pet) {
    return pet.swim !== undefined;
}
const move2 = (animal) => {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
};
const variant = {
    sm: "sm",
    md: "md",
    lg: "lg",
};
const fn3 = (variant) => { };
let m = "x";
const person = {
    1: "1",
    "0": "1",
};
let t = "3";
const n = "sdsvfvfvfd";
