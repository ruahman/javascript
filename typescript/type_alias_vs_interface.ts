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

let diego: Diego = {
  name: "Diego",
  hungry: true,
  programmer: true,
};

diego.programmer; // this will not cause error

// but this also works
let diego2: Person = diego;

// diego2.programmer; // this will cause error

const me: Person = {
  name: "Lee",
  hungry: true,
};

class Harry implements Person {
  name: string;
  hungry: boolean;
  constructor(name: string, hungry: boolean) {
    this.name = name;
    this.hungry = hungry;
  }
}

// you can use interface to describe function,
// but it's ackward to use interface to describe function
interface Greating {
  (name: string): string;
}

// type alias is more suitable for describing function
type Greating2 = (name: string) => string;

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
let personExtend: PersonExtend = {
  firstName: "Diego",
  lastName: "Lee",
  age: 18,
};

// you can type basic values
type Name = string;
type Age = number;
type Gay = boolean;

// again it eaier to type function with type alias
type Greating3 = (name: string) => string;
let testGreating: Greating3 = (name) => {
  return `Hello ${name}`;
};

// obviously you can type alias objects
// type alias and interface are more or less the same
type Person2 = {
  first: string;
  last: string;
  years: number;
};

let andy: Person2 = {
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

// union
type SpecialOrNormalPerson = SpecialPerson | Person2;
