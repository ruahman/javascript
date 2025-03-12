import { expect } from "bun:test";

export default function type_alias_vs_interface() {
  // interface is more suitable for describing object
  // use interfaces if you plan on extending
  // also if you are using classes, you can use interfaces
  interface Person {
    name: string;
    hungry: boolean;
  }

  // you can extent interfaces
  interface Diego extends Person {
    programmer: boolean;
  }

  const diego: Diego = {
    name: "Diego",
    hungry: true,
    programmer: true,
  };

  expect(diego.programmer).toBe(true);
  expect(diego.hungry).toBe(true);
  expect(diego.name).toBe("Diego");

  // you can use interface to describe function,
  // but it's ackward to use interface to describe function
  interface Greating {
    (name: string): string;
  }

  const greating: Greating = (name) => {
    return `Hello ${name}`;
  };

  expect(greating("Diego")).toBe("Hello Diego");

  // type alias is more suitable for describing function
  type Greating2 = (name: string) => string;

  const greating2: Greating2 = (name) => {
    return `Hello ${name}`;
  };

  expect(greating2("Diego")).toBe("Hello Diego");

  // you can also extent interfaces
  // all interfaces with the same name will be merged,
  // kinda cool
  interface PersonExtend {
    firstName: string;
  }

  interface PersonExtend {
    lastName: string;
  }

  interface PersonExtend {
    age: number;
  }

  // this works
  const personExtend: PersonExtend = {
    firstName: "Diego",
    lastName: "Lee",
    age: 18,
  };

  expect(personExtend.firstName).toBe("Diego");
  expect(personExtend.lastName).toBe("Lee");
  expect(personExtend.age).toBe(18);

  // you can type basic values
  type Name = string;
  type Age = number;
  type Gay = boolean;

  // obviously you can type alias objects
  // type alias and interface are more or less the same
  type Person2 = {
    first: string;
    last: string;
    years: number;
  };

  const andy: Person2 = {
    first: "Andy",
    last: "Lee",
    years: 18,
  };

  // but types can not extend other types
  // so instead you can use intersection
  // or union

  // intersection
  type SpecialPerson = Person2 & {
    superPower: string;
  };

  const superPerson: SpecialPerson = {
    first: "Super Andy",
    last: "Lee",
    years: 18,
    superPower: "fly",
  };

  expect(superPerson.first).toBe("Super Andy");
  expect(superPerson.last).toBe("Lee");
  expect(superPerson.years).toBe(18);
  expect(superPerson.superPower).toBe("fly");

  // union
  type SpecialOrNormalPerson = SpecialPerson | Person2;
}
