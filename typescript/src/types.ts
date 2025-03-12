/* eslint-disable */
import { Expect } from "bun:test";

export function types(expect: Expect) {
  // string
  const firstName: string = "Dylan";
  console.log("testing types", firstName);

  //firstName = "John";

  console.log("...cant change const");

  //firstName2 = 3;
  console.log("...cant change type");

  const firstName2 = "Dylan";
  console.log("...inferred type");

  // boolean
  const u = true;
  console.log("...boolean type");

  const isNull = null;
  const isUndefined = undefined;
  expect(isNull).toBeNull();
  expect(isUndefined).toBeUndefined();
  // null is not the same as undefined
  expect(isNull).not.toBeUndefined();
  expect(isUndefined).not.toBeNull();
  // however, both null and undefined caluculate to false
  expect(isNull).toBeFalsy();
  expect(isUndefined).toBeFalsy();
  console.log("...null and undefined types");

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

  greeting = function (name: string) {
    return `Hi ${name}`;
  };
  console.log("...function type");
}
