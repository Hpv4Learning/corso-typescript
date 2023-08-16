let punteggio: string | number = 30;
punteggio = "30";

type User = {
  _id: string;
  nome: string;
  cognome: string;
  role: "user";
};
type Admin = {
  _id: string;
  nome: string;
  cognome: string;
  role: "admin";
  test: string;
};

const user: User = {
  _id: "1",
  nome: "Mario",
  cognome: "Rossi",
  role: "user",
};

const admin: Admin = {
  _id: "1",
  nome: "Mario",
  cognome: "Rossi",
  role: "admin",
  test: "test",
};

type UserOrAdmin = User | Admin;

const fn2 = (user: UserOrAdmin) => {
  if (user.role === "admin") {
    return user.test;
  } else {
    return user.role;
  }
};

const fn = (param: string | number) => {
  if (typeof param === "string") {
    return param.toUpperCase();
  } else {
    return param.toFixed(2);
  }
};

export {};
