const names: string[] = [];
names.push("Diego");

// readonly array, cant push to this
const names2: readonly string[] = ["diego"];
//   names2.push("andy");

//  you can type inference an array
const numbers = [1, 2, 3];
numbers.push(4);

// simple array
const a: number[] = [1, 2, 3, 4, 5];
a.push(66);
console.log("simple array ", a);
