export function types() {
  // string
  const firstName: string = "Dylan";
  console.log("testing types");

  //firstName = "John";

  console.log("...cant change const");

  //firstName2 = 3;
  console.log("...cant change type");

  const firstName2 = "Dylan";
  console.log("...inferred type");

  // boolean
  const u = true;
  console.log("...boolean type");

  // any
  let v: any;
  v = "string"; // no error as it can be "any" type
  v = 123;
  v = true;
  console.log("...any type");

  // number
  const simpleNumber: number = 312;
  console.log("...number type");

  // arrays
  const mynames: string[] = ["Jhn", "Jane", "Peter", "David", "Mary"];
  console.log("...array type");

  // objects, object leterals
  let person: {
    name: string;
    age: number;
  };

  // eslint-disable-next-line
  person = {
    name: "John",
    age: 25,
  };
  console.log("...object type");

  const { age }: { age: number } = person;
  console.log("...object destructuring");

  const employe: {
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
  console.log("...object initializing");

  let greeting: (name: string) => string;

  // eslint-disable-next-line
  greeting = function (name: string) {
    return `Hi ${name}`;
  };
  console.log("...function type");
}
