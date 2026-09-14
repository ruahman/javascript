import assert from "node:assert";

// hoisting is JavaScript's defualt behavio of moving declarations to the top
// of the current scope.
// Because of this JavaScript functions can be called before they are declared
// Arrow functions are not hoisted, they must be defined before they can be used

// in javascript you can use a function before declaring it.
showMe();

function showMe() {
  console.log("show mae");
}
// this feature is called hoisting.
// The javaScript engine move the function declaration to the top of the code
// before executing it

function defualtParam(x, y, z = 66) {
  console.log(x, y, z);
}

// Function hoisting allows you to call a function before declaring it

// rest parameter
function multiply(...nums) {
  return nums.reduce((total, number) => total * number);
}

function myAwesomeFunction() {
  console.log("myAwesomeFunction");
}

// arrow functions
// the this object is different when arrow functions,
let myFunction = (a, b) => a * b;

// With a regular function "this" represents the object that calls the function:
// Regular Function:
let hello = function () {
  console.log("hello");
};

// With an arrow function "this" represents the owner of the function, where it was defined:
// Arrow Function:
let hello2 = () => {
  console.log("hello2");
};

export function functions() {
  myAwesomeFunction();
  console.log(myFunction(1, 2));
  hello();
  hello2();

  // Imediatly Invoke Function Expression (IIFE)
  (function helloIIFE() {
    console.log("hello IIFE");
  })();

  var items = [1, 2, 3];
  // sometime function give more hints what the funtion is for.
  // I prefer this than anonymus functions
  items.forEach(function showTheItem(item) {
    console.log(item);
  });

  // closure is when a function remembers the variables outside of it.
  function ask(question) {
    return () => {
      console.log(question);
    };
  }

  var ask1 = ask("who are you?");
  ask1();

  // this provides context to which the function is called and how it was called
  var workshop = {
    teacher: "Kyle",
    ask(question) {
      console.log(this.teacher, question);
    },
  };
  workshop.ask("what do you want?");

  // you can add context to a function
  function ask2(question) {
    console.log(this.teacher, question);
  }

  var myContext = {
    teacher: "Suzy",
  };
  ask2.call(myContext, "Why?");

  // prototypes
  function WorkshopFunc(teacher) {
    this.teacher = teacher;
  }
  // use prototype that way we only have one impementation of the method,
  // you define methods in the prototype so that you don't have to define the method
  // each time you make an instance.
  // instead of each object having there own implementation
  // only function does this keyword work,
  // you can use arrow functions if you want to use this
  WorkshopFunc.prototype.ask = function (question) {
    console.log(this.teacher, question);
  };

  // link object created to prototype
  var deeepJS = new WorkshopFunc("Kyle");
  var reactJS = new WorkshopFunc("Suzy");
  // this object gets delegated to the prototype chain
  deeepJS.ask("what is up?");
  reactJS.ask("Nothing!");

  // call
  function fullName() {
    return this.firstName + " " + this.lastName;
  }

  var person = {
    firstName: "Diego",
    lastName: "Vila",
  };

  assert.strictEqual(fullName.call(person), "Diego Vila");

  // bind
  function fullName() {
    return this.firstName + " " + this.lastName;
  }

  let fullNameVar = fullName.bind(person);
  assert.strictEqual(fullNameVar(), "Diego Vila");

  // rest parameters
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }

  var x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  assert.equal(x, 326);

  // object deconstruct parameters
  function addUser({ firstName = "foo", lastName = "bar" }) {
    return `${firstName} ${lastName}`;
  }

  assert.equal(addUser({ firstName: "Diego", lastName: "Vila" }), "Diego Vila");
  assert.equal(addUser({}), "foo bar");

  // call
  function fullNameCityCountry(city, country) {
    return `${this.firstName} ${this.lastName} ${city} ${country}`;
  }

  var person1 = {
    firstName: "Diego",
    lastName: "Vila",
  };

  var person2 = {
    firstName: "Andy",
    lastName: "Vila",
  };

  assert.equal(
    fullNameCityCountry.call(person1, "Chicago", "USA"),
    "Diego Vila Chicago USA",
  );
  assert.equal(
    fullNameCityCountry.call(person2, "Chicago", "USA"),
    "Andy Vila Chicago USA",
  );

  // apply
  // exactly the same as call except they we use a array to pass parameters
  assert.equal(
    fullNameCityCountry.apply(person1, ["Chicago", "USA"]),
    "Diego Vila Chicago USA",
  );
  assert.equal(
    fullNameCityCountry.apply(person2, ["Chicago", "USA"]),
    "Andy Vila Chicago USA",
  );

  // bind
  var person3 = {
    firstName: "Alice",
    lastName: "Vila",
  };

  let fullNameBind = fullNameCityCountry.bind(person3);
  assert.equal(fullNameBind("Chicago", "USA"), "Alice Vila Chicago USA");

  assert.equal(multiply(2, 3, 4), 24);
}
