import assert from "node:assert";

export function spreadAndRest() {
  let hobbies = ["cooking", "sports", "coding"];

  // spread an array
  let newHobbies = [...hobbies, "reading"];

  console.log(hobbies);
  console.log(newHobbies);

  const deconstructArray = (arg1, arg2, arg3) => {
    console.log(arg1, arg2, arg3);
  };

  // deconstruct an array as parameters to a function
  deconstructArray(...hobbies);

  const toArray = (...args) => {
    console.log(args);
  };

  toArray(1, 2, 3, 4);

  let person = {
    name: "Diego",
    age: 42,
  };

  // spread an object
  let newPerson = { ...person, sex: "male" };
  console.log(newPerson);

  // deconstruct an object
  const { name, age } = person;
  console.log(name, age);

  const printName = ({ name, age }) => {
    console.log(name, age);
  };

  printName(person);
}
