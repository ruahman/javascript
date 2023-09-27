// string
const firstName: string = "Dylan";

let firstName2 = "Dylan"; // inferred to type string
firstName2 = "andy"; // attempts to re-assign the value to a different type

// boolean
const u = true;

// any
let v: any = true;
v = "string"; // no error as it can be "any" type
v = 123;
v = true;

// number
const simpleNumber: number = 312;

// arrays
// eslint-disable-next-line
const mynames: string[] = ["John", "Jane", "Peter", "David", "Mary"];

// objects, object leterals
let person: {
  name: string;
  age: number;
};

person = {
  name: "John",
  age: 25,
};

let { age }: { age: number } = person;

let myemployee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

myemployee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

let myemployee2: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

// function
// eslint-disable-next-line
const greeting: (name: string) => string = function (name: string) {
  return `Hi ${name}`;
};

// void
// this is just for void fuctions
function log(message: string): void {
  console.log(message);
}

// never
// function never returns because it throws an exception or infinite loop
function raiseError(message: string): never {
  throw new Error(message);
}

let loop = function forever(): never {
  while (true) {
    console.log("Hello");
  }
};
