const a = "3";

const fn = (a: string | number) => {
  if (typeof a === "string") {
    return a.toUpperCase();
  }
  return a;
};

const b = {
  a: 2,
};

const fn2 = (a: string | number | null) => {
  if (!a) {
    return;
  }
};

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

const data = new Date(Date.now());

const checkDate = (date: Date | string) => {
  if (date instanceof Date) {
    return date.toISOString();
  }

  return new Date(date).toISOString();
};

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const move2 = (animal: Fish | Bird) => {
  if (isFish(animal)) {
    return animal.swim();
  }
  return animal.fly();
};

const variant = {
  sm: "sm" as const,
  md: "md" as const,
  lg: "lg" as const,
};

type Variant = (typeof variant)[keyof typeof variant];

const fn3 = (variant: Variant) => {};

type Point = { x: number; y: number };

type M = keyof Point;

let m: M = "x";

type Person = {
  [x: number]: string;
};

type Z = keyof Person;

const person: Person = {
  1: "1",
  "0": "1",
};

let t = "3";

const n: typeof t = "sdsvfvfvfd";

type arr = number[];

type Person2 = {
  name: string;
  age: arr;
};

type Prova = Person2["age"][number];
