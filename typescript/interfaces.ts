console.log("**** interfaces ****");

// interfaces are simular to alias except it only applies to objects
interface Rectangle {
  height: number;
  width: number;
}

const rectange: Rectangle = {
  height: 23,
  width: 55,
};

// extended interfaces
interface ColoredRectangle extends Rectangle {
  color: string;
}

const colorRec: ColoredRectangle = {
  height: 45,
  width: 67,
  color: "blue",
};

// interfaces function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

console.log("interface functions: ", add(2, 2));

// problem interfaces solve
interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}
const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);

interface Person {
  firstName: string;
  lastName: string;
}

function getFullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

let john = {
  firstName: "John",
  lastName: "Doe",
};

console.log(getFullName(john));

// this also works
let jane = {
  firstName: "Jane",
  middleName: "K.",
  lastName: "Doe",
  age: 22,
};

let fullName = getFullName(jane);
console.log(fullName); // Jane Doe

// optional properties
interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}

function getFullName2(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}

// readonly properties
interface Person {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let person2: Person;
person2 = {
  ssn: "171-28-0926",
  firstName: "John",
  lastName: "Doe",
};

// function types
interface StringFormat {
  (str: string, isUpper: boolean): string;
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format("hi", true));

// class types
interface Json {
  toJSON(): string;
}

class Person implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJSON(): string {
    return "hello world";
  }
}

// extend interfaces

interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

interface A {
  a(): void;
}

interface B extends A {
  b(): void;
}

class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email} after ms. `);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}
