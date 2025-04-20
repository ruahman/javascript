import assert from "node:assert";

export function objects() {
  // think of an object as a collectio of name value pairs

  var car = {
    make: "VW",
    range: 360,
    model: "Golf",
  };

  var donut = {
    type: "coconut",
    glazed: true,
    sayHi: function () {
      console.log("hi: ", this.type);
    },
  };

  donut.sayHi();

  // constructor pattern for creating objects

  function Donut(type, glazed) {
    this.type = type;
    this.glazed = glazed;
    this.sayHi = function () {
      console.log("hi: ", this.type);
    };
  }

  var d = new Donut("chocolate", true);
  console.log(d);

  // Create an Object
  const personObj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  // or this way
  // Create an Object
  var person = {};

  // Add Properties
  person.firstName = "John";
  person.lastName = "Doe";
  person.age = 50;
  person.eyeColor = "blue";

  // create object with new
  const personNew = new Object();

  // Add Properties
  personNew.firstName = "John";
  personNew.lastName = "Doe";
  personNew.age = 50;
  personNew.eyeColor = "blue";

  // give an object a function
  const personWithFunc = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  let fname = personWithFunc.firstName;
  // or
  fname = personWithFunc["firstName"];

  // you can delete a property
  delete personWithFunc.id;

  // nested objects
  var myObj = {
    name: "John",
    age: 30,
    myCars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat",
    },
  };
  assert.equal(myObj.myCars.car2, "BMW");

  // stringify
  console.log(JSON.stringify(myObj));

  // object constructor
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    // you could do this
    this.myFunction = function () {
      console.log("my func");
    };
  }
  // add a property to prototype
  Person.prototype.nationality = "USA";

  // it's better to define functioon in prototype, that way instances can share implementation
  // rater than having each instances have there own
  Person.prototype.myProtoFunc = function () {
    console.log("my proto function");
  };

  const myFather = new Person("John", "Doe", 50, "blue");

  // goes to prototype chain
  assert.equal(myFather.nationality, "USA");

  // call this instance function
  myFather.myFunction();
  // call get delegated to prototype chain
  myFather.myProtoFunc();

  // destructing objects
  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
  };

  // Destructuring
  let { firstName, lastName } = person;
  assert.equal(firstName, "John");
  assert.equal(lastName, "Doe");

  let { firstName: name } = person;
  assert.equal(name, "John");

  // getters and setters
  var person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value;
    },
  };
  assert.equal(person.fullName, "John Doe");
  person.lang = "en";
  assert.equal(person.lang, "en");

  // symbol
  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  // this is a unique "hidden" identifier that no other code can accidentally access
  let id = Symbol("id");
  person[id] = "foobar";
  console.log(person);
  // this is not the same
  assert.notStrictEqual(person[id], person.id);
  assert.notStrictEqual(person[id], person["id"]);

  // entires
  var entries = Object.entries(person);
  assert.deepStrictEqual(entries, [
    ["firstName", "John"],
    ["lastName", "Doe"],
    ["age", 50],
    ["eyeColor", "blue"],
  ]);

  // keys
  var keys = Object.keys(person);
  assert.deepStrictEqual(keys, ["firstName", "lastName", "age", "eyeColor"]);

  // values
  var values = Object.values(person);
  assert.deepStrictEqual(values, ["John", "Doe", 50, "blue"]);
}
