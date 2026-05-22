interface User {
  name: string;
  age: number;
  email: string;
}

type FullUser = Required<User>;

type PartialUser = Partial<User>;
