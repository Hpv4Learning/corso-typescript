interface User {
  readonly _id: number;
  name: string;
  mail: string;
  login?: () => string;
  logout(param: string): string;
}

interface Admin {
  role: string;
}

type User2 = {
  readonly _id: number;
  name: string;
  mail: string;
  login?: () => string;
  logout(): string;
};

type User3 = User2 & { googleId: string };

interface User {
  googleId: string;
}

interface SuperAdmin extends User, Admin {
  isSuperAdmin: true;
}

const user: SuperAdmin = {
  _id: 1,
  name: "Mario",
  mail: "m@m.it",
  googleId: "123",
  role: "admin",
  isSuperAdmin: true,
  login() {
    return "login";
  },
  logout() {
    return "logout";
  },
};

if (user.logout) {
  user.logout("param");
}

export {};
