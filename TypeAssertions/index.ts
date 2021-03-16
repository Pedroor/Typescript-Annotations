// Type assertions - as

const unk: unknown = "";

const str: string = unk as string;

interface User {
  nome: string;
}

const user: User = {} as User;
