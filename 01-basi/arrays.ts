const array: number[] = [];
array.push(1);

const array2: Array<number> = [];

array2.push(1);

type Corso = {
  readonly _id: string;
  nome: string;
  descrizione?: string;
  prezzo: number;
};

const corsi: Corso[] = [];

corsi.push({
  _id: "1",
  nome: "Corso 1",
  prezzo: 10,
});

// const corsiDescription = corsi.map((corso) => {
//     return corso.pagamento
// })

const stringArray = ["1", "2", "3"];
const numberArray = [1, 2, 3];
const mixedArray: (string | number | boolean)[] = ["1", "3", 2, true];

export {};
