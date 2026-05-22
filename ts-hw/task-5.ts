interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    street: string;
  };
}

const person: Person = {
  name: "Alex",
  age: 25,
  address: {
    city: "Київ",
    street: "Хрещатик"
  }
};
