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

  // check if property exists
  assert.ok(!("id" in personWithFunc));
  assert.ok("firstName" in personWithFunc);

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

  var NestedPerson = {
    first: "Diego",
    last: "Vila",
    address: {
      street: "Carr 465 1.9 km",
      city: "Aguadilla",
      state: "PR",
      zip: 60603,
    },
  };

  let {
    first,
    last,
    address: { street, city, state, zip },
  } = NestedPerson;

  assert.deepStrictEqual(
    [first, last, street, city, state, zip],
    ["Diego", "Vila", "Carr 465 1.9 km", "Aguadilla", "PR", 60603],
  );

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
  //
  // The Symbol function create a new unique value every time you call it.
  assert.notEqual(Symbol(), Symbol());

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

  // inheritenc
  function Animal(name, age) {
    this.name = name;
    this.age = age;
  }
  Animal.prototype.makeNoise = function () {
    console.log("generic noise");
  };

  function Dog(name, age, breed) {
    // this is how you can inherit
    Animal.call(this, name, age);
    this.breed = breed;
  }
  // inherit methods from prototype
  Dog.prototype = Object.create(Animal.prototype);
  // take out Animal constuctor and replace it with Dog constuctor
  Dog.prototype.constructor = Dog;

  var oynx = new Dog("oynx", 8, "thai ridge back");
  assert.equal(oynx.name, "oynx");
  assert.equal(oynx.age, 8);
  assert.equal(oynx.breed, "thai ridge back");

  oynx.makeNoise();

  // optional chaining
  var namex;
  console.log(namex?.toUpperCase() ?? "No name"); // this won't cause any problems

  const users = [
    { name: "John", address: { city: "New York" } },
    { name: "Alex" },
    { name: "Diego", address: { country: "USA" } },
  ];

  for (let user of users) {
    const city = user.address?.city?.toUpperCase() ?? "I got nothing";
    console.log(city);
  }

  // Weak References:
  // var objectx = {};
  // var ws = new WeakSet(objectx);
  // object = null;
}
