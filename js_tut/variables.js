import assert from "node:assert";

export function variables() {
  let x = 5;
  let y = 6;
  let z = x + y;

  const x1 = 5;
  const y1 = 6;
  const z1 = x + y;

  const price1 = 5;
  const price2 = 6;
  let total = price1 + price2;

  // after the declaration, the variable has no value (technically it is undefined)
  let carName1;
  assert.equal(carName1, undefined);

  let person = "John Doe",
    carName = "Volvo",
    price = 200;

  // you can redeclare the varable with var
  // kinda shadow
  var carName2 = "Volvo";
  var carName2;

  // you can not redeclare a varable with let or const
  // let carName = "Volvo";
  // let carName;

  // you can have dolar signs
  let $ = "Hello World";
  let $$$ = 2;
  let $myMoney = 5;

  // Variables declared with varinside a { } block can be accessed from outside the block:
  // var only gives function scope
  {
    var xxxx = 2;
  }
  assert.equal(xxxx, 2);

  // however let has block scope
  {
    let yyyy = "you cant see me";
  }
  // this will cause an error
  // assert.ok(yyyy);

  // variable defined with var are hoisted to the top and can be initialized at any time
  carNameVar = "volvo";
  var carNameVar;

  // var is scoped to the function
  // var is are hoisted to the top, which means you can use a variable before it is delared
  variableNumber = 666;
  assert.equal(variableNumber, 666);
  var variableNumber;
  assert.equal(variableNumber, 666);

  var float = 3.12;

  var int = 23;
  var variableString = "Hello World";

  // undefined is when nothing gets assigned to a variable.
  // a variable without a value
  var myUndefined;
  assert.ok(!myUndefined, "this should be undefined");

  // null is explicitly assigned to a variable.
  var myNull = null;
  assert.ok(!myNull, "this should be null");

  // let is scoped to the block
  {
    let scoped = "scoped";
    assert.equal(scoped, "scoped");
  }
  // this will cause a problem
  // console.log(scoped);

  // const cannot be reassigned
  const myName = "Diego";

  // cant do this
  // myName = 'Diego';

  // const is a little misleading, it does not define a constant value.
  // it defines a constant reference to a value

  // You can create a constant array:
  const cars = ["Saab", "Volvo", "BMW"];

  // You can change an element:
  cars[0] = "Toyota";

  // You can add an element:
  cars.push("Audi");

  // but you can't reassign the array
  // cars = ["Toyota", "Volvo", "Audi"];

  // You can create a const object:
  const car = { type: "Fiat", model: "500", color: "white" };

  // You can change a property:
  car.color = "red";

  // You can add a property:
  car.owner = "Johnson";

  // but you can't reassign an object
  // car = { type: "Volvo", model: "EX60", color: "red" };
}
