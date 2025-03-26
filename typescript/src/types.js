/* eslint-disable */
import { expect } from "bun:test";
export function types() {
    // string
    const firstName = "Dylan";
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
    let v;
    v = "string"; // no error as it can be "any" type
    v = 123;
    v = true;
    console.log("...any type");
    // number
    const simpleNumber = 312;
    console.log("...number type");
    // arrays
    const mynames = ["Jhn", "Jane", "Peter", "David", "Mary"];
    console.log("...array type");
    // objects, object leterals
    let person;
    person = {
        name: "John",
        age: 25,
    };
    console.log("...object type");
    const { age } = person;
    console.log("...object destructuring");
    const employe = {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        jobTitle: "Web Developer",
    };
    console.log("...object initializing");
    let greeting;
    greeting = (name) => `Hi ${name}`;
    console.log("...function type");
}
//# sourceMappingURL=types.js.map