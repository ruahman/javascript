import assert from "node:assert";

export default function () {
  // explicit type string
  const firstName: string = "Dylan";
  console.log("testing types", firstName);

  //firstName = "John";

  console.log("...cant change const");

  // implicit type
  const firstName2 = "Dylan";
  console.log("...inferred type ", firstName2);

  // typescript will throw error is data types do not match
  // let firstNameLet = "Dylin";
  // firstNameLet = 33;

  // unable to inffer
  const json = JSON.parse("55"); // we don't know what the type will be
  console.log("typeof json: ", typeof json);

  // boolean
  const u = true;
  console.log("...boolean type", u);

  // undefined and null
  const isNull = null;
  const isUndefined = undefined;
  console.log("...null and undefined types", isNull, isUndefined);

  // any
  // any: is a type that disable type checking
  // you can asign anthing to it
  let v: any;
  v = "string"; // no error as it can be "any" type
  v = 123;
  v = true;
  console.log("...any type");

  // number
  const simpleNumber: number = 312;
  console.log("...number type: ", simpleNumber);

  // arrays
  const mynames: string[] = ["Jhn", "Jane", "Peter", "David", "Mary"];
  console.log("...array type ", mynames);

  // objects, object leterals
  let person: {
    name: string;
    age: number;
  };

  person = {
    name: "John",
    age: 25,
  };
  console.log("...object type");

  const { age }: { age: number } = person;
  console.log("...object destructuring", age);

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
  console.log("...object initializing", employe);

  let greeting: (name: string) => string;

  greeting = (name: string) => `Hi ${name}`;
  console.log("...function type");

  // this can be a string or null
  let testNull: string | null;

  testNull = "foo";
  assert.equal(typeof testNull, "string");

  testNull = null;
  assert.equal(typeof testNull, "object");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("if you want to see the tests");
  console.log("run: npm run test src/types.test.ts");
}
