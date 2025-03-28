var someNumber = 10;

if (someNumber > 5) {
  console.log('The number is greater than 5');
} else {
  console.log('The number is not greater than 5');
}

// == does type conversion
// === does not do type conversion

const number5 = 5;
const string5 = '5';

console.log(number5 == string5); // true
console.log(number5 === string5); // false
