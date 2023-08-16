const user = {
  nome: "Anna",
  cognome: "Da Roma",
  mail: "anna@evviva.it",
  isPaid: true,
};

const createUser = ({
  nome,
  cognome,
  isPaid,
}: {
  nome: string;
  cognome: string;
  isPaid: boolean;
}): { nome: string; cognome: string; isPaid: boolean } => {
  return { nome, cognome, isPaid };
};

createUser({ nome: "Vittorio", cognome: "Do Roma", isPaid: true });

createUser(user);

type User = {
  nome: string;
  cognome: string;
  isPaid: boolean;
  mail?: string;
};

const user2: User = {
  nome: "Anna",
  cognome: "Da Roma",
  mail: "anna@evviva.it",
  isPaid: true,
};

const user3: User = {
  nome: "Anna",
  cognome: "Da Roma",
  isPaid: true,
};

type UtenteRegistrato = {
  readonly _id: string;
  nome: MyString;
  cognome: string;
  isPaid: boolean;
  mail?: string;
};

type Corso = {
  readonly _id: string;
  nome: string;
  descrizione?: string;
  prezzo: number;
};

type CardDetails = {
  numeroCarta: string;
  cvv: string;
};

type Payment = {
  readonly _paymentId: string;
  importo: number;
  method: string;
  data: Date;
};

type AppUser = {
  readonly _id: string;
  nome: string;
  cognome: string;
  isPaid: boolean;
  mail?: string;
  cardDetails?: CardDetails;
  corsi?: Corso[];
  pagamenti?: Payment[];
};

type MyString = string;

const appUser: AppUser = {
  _id: "123",
  nome: "Anna",
  cognome: "Da Roma",
  isPaid: true,
};

const corso: Corso = {
  _id: "123",
  nome: "Corso di React",
  descrizione: "Corso di React",
  prezzo: 100,
};

const buyCourse = (user: AppUser, corso: Corso) => {
  if (!user.isPaid) return;
  if (!user.cardDetails) return;
  try {
    user.pagamenti?.push({
      _paymentId: Math.random().toString(36).substring(7),
      method: user.cardDetails.numeroCarta,
      importo: corso.prezzo,
      data: new Date(),
    });
    user.corsi?.push(corso);
  } catch (error) {
    console.error(error);
  }
};

buyCourse(appUser, corso);

const registerUser = ({ nome, cognome, isPaid }: User): UtenteRegistrato => {
  return {
    _id: Math.random().toString(36).substring(7),
    nome,
    cognome,
    isPaid,
  };
};

const user4 = registerUser(user2);

export {};
