/* eslint-disable */

function myAwesomeFunction() {
  console.log('myAwesomeFunction');
}

// arrow functions
let myFunction = (a, b) => a * b;

// With a regular function "this" represents the object that calls the function:
// Regular Function:
let hello = function () {
  document.getElementById('demo').innerHTML += this;
};

// With an arrow function "this" represents the owner of the function, where it was defined:
// Arrow Function:
hello = () => {
  document.getElementById('demo').innerHTML += this;
};
