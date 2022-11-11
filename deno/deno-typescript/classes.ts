import { User } from "./interfaces.ts";

class Person implements User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is ${this.id}`;
  }
}

class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

export default function () {
  console.log("***** classes *****");

  const person = new Person(23, "diego");
  console.log(person.register());

  const emp = new Employee(34, "andy", "boss");
  console.log(emp);
}
