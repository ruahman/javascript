let firstName: string = "Dylan";

let firstName2 = "Dylan"; // inferred to type string
firstName2 = "andy"; // attempts to re-assign the value to a different type

let u = true;

let v: any = true;
v = "string"; // no error as it can be "any" type

console.log(firstName, firstName2);
