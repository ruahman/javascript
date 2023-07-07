// var is scoped to the function
// eslint-disable-next-line
var variableNumber = 2;
// eslint-disable-next-line
var float = 3.12;
// eslint-disable-next-line
var int = 23;
// eslint-disable-next-line
var variableString = 'Hello World';

// undefined is when nothing gets assigned to a variable.
// eslint-disable-next-line
var myUndefined;
// null is explicitly assigned to a variable.
// eslint-disable-next-line
var myNull = null;

// let is scoped to the block
// eslint-disable-next-line
if (true) {
  let scoped = 'scoped';
  console.log(scoped);
}

// const cannot be reassigned
const myName = 'Diego';

// cant do this
// myName = 'Diego';

console.log(myName);
