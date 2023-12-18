// they can also be called template strings

// a tagged template literal does not have to result in a string.
// it can return anything you want.

// The string and placeholders get passed to a function -- either to the string interpolation function or
// to a function you supply.

// with template literals, you can avoid the concatenation operator.
let foo = "World";
console.log(`Hello, ${foo}!`);

// tagged templates allow you to parse template literals with a function.

function myTag(strings: string[], personExp: string, ageExp: number): string {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal,
  // this doesn't have to be a string. it can return whatever you want.
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const person = "Mike";
const age = 28;

// you can use any function you want just make sure you put if before the template literal,
// and that the first paragraph is an array of strings.
const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
