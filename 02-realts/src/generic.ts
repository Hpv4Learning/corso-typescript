const identity = (arg: any): any => arg;
const identity2 = <Type>(arg: Type): Type => arg;

let value = identity2("1");

type Persona = {
  name: string;
  age: number;
};

let persona = identity2<Persona>({ name: "1", age: 1 });
const login = (param: Persona): void => {};
login(persona);

function identity3<Type>(arg: Type): Type {
  return arg;
}

function identityArray<T>(arg: T[]): T[] {
  if (arg.length > 0) console.log(arg.length);
  return arg.filter(Boolean);
}

let arr = identityArray([1, 2, 3]);

const doubleGeneric = <T, U extends keyof Persona>(arg: T, arg2: U): void => {};

doubleGeneric(1, "name");

interface Corsi {
  id: number;
  nome: string;
}

interface VideoCorsi {
  id: number;
  nome: string;
  url: string;
}

class Carrello<T> {
  constructor(public value: T[]) {}
  add(item: T) {
    this.value.push(item);
  }
}

const carrello = new Carrello<VideoCorsi>([]);

carrello.add({ id: 1, nome: "1", url: "1" });
