import assert from "node:assert";

export function loops() {
  let students = [
    { foo: "bar" },
    { foo: "bar" },
    { foo: "bar" },
    { foo: "bar" },
    { foo: "bar" },
  ];

  // simple for loop
  for (let i = 0; i < students.length; i++) {
    console.log(i);
  }

  // for each
  for (let student of students) {
    console.log(student);
  }

  // keep going until list is empty
  while (students.length > 0) {
    let student = students.pop();
    console.log(student);
  }

  // Array.forEach
  var numbers = [45, 4, 9, 16, 25];

  var txt = "";
  numbers.forEach(function myFunction(value, index, array) {
    txt += value;
  });
  assert.strictEqual(txt, "45491625");
}
