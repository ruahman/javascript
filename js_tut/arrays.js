import assert from "node:assert";

export function arrays() {
  var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var stringArray = ["Hello", "World", "How", "Are", "You"];
  console.log(stringArray.sort());
  console.log(stringArray.concat(["I", "Am", "Fine"]));
  console.log(stringArray.slice(1, 3));
  console.log(stringArray.join(","));

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  let fLen = fruits.length;

  let text = "<ul>";
  for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
  }
  text += "</ul>";
  console.log(text);

  text = "<ul>";
  fruits.forEach((item) => {
    text += item;
  });
  text += "</ul>";
  console.log(text);

  // toString
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.toString());
  assert.equal(fruits.toString(), "Banana,Orange,Apple,Mango");

  // join
  console.log(fruits.join("*"));
  assert.equal(fruits.join("*"), "Banana*Orange*Apple*Mango");

  // pop
  assert.equal(fruits.pop(), "Mango");

  // push
  fruits.push("Kiwi");
  assert.deepStrictEqual(fruits, ["Banana", "Orange", "Apple", "Kiwi"]);

  // shift
  fruits.shift();
  assert.deepStrictEqual(fruits, ["Orange", "Apple", "Kiwi"]);

  // unshift
  fruits.unshift("Lemon");
  assert.deepStrictEqual(fruits, ["Lemon", "Orange", "Apple", "Kiwi"]);

  // delete
  delete fruits[2];
  assert.ok(!fruits[2]);

  // concat
  const myGirls = ["Cecilie", "Lone"];
  const myBoys = ["Emil", "Tobias", "Linus"];

  assert.deepStrictEqual(myGirls.concat(myBoys), [
    "Cecilie",
    "Lone",
    "Emil",
    "Tobias",
    "Linus",
  ]);

  // flat
  var myArr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  var newArr = myArr.flat();
  assert.deepStrictEqual(newArr, [1, 2, 3, 4, 5, 6]);

  // splice, insert items
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 0, "Lemon", "Kiwi");
  assert.deepStrictEqual(fruits, [
    "Banana",
    "Orange",
    "Lemon",
    "Kiwi",
    "Apple",
    "Mango",
  ]);

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 2, "Lemon", "Kiwi");
  assert.deepStrictEqual(fruits, ["Banana", "Orange", "Lemon", "Kiwi"]);

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(1, 1);
  assert.deepStrictEqual(fruits, ["Banana", "Apple", "Mango"]);

  // toSpliced
  var months = ["Jan", "Feb", "Mar", "Apr"];
  var spliced = months.toSpliced(0, 1);
  assert.deepStrictEqual(spliced, ["Feb", "Mar", "Apr"]);

  // slice
  var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  var citrus = fruits.slice(1, 3);
  assert.deepStrictEqual(citrus, ["Orange", "Lemon"]);

  // indexOf
  var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  assert.equal(fruits.indexOf("Lemon"), 2);

  // includes
  assert.ok(fruits.includes("Apple"));
  assert.ok(!fruits.includes("Papya"));

  // find
  var numbers = [4, 9, 16, 25, 29];
  var first = numbers.find(function findGreaterThan18(val, idx, array) {
    return val > 18;
  });
  assert.equal(first, 25);

  // findIndex
  var first = numbers.findIndex(
    function findIdxOfGreaterThan18(value, index, array) {
      return value > 18;
    },
  );
  assert.equal(first, 3);

  // sort
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();
  assert.deepStrictEqual(fruits, ["Apple", "Banana", "Mango", "Orange"]);

  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function (a, b) {
    return a - b;
  });
  assert.deepStrictEqual(points, [1, 5, 10, 25, 40, 100]);

  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function (a, b) {
    return b - a;
  });
  assert.deepStrictEqual(points, [100, 40, 25, 10, 5, 1]);

  var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
  ];
  cars.sort(function (a, b) {
    return a.year - b.year;
  });
  assert.deepStrictEqual(cars, [
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
    { type: "Volvo", year: 2016 },
  ]);

  // reverse
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.reverse();
  assert.deepStrictEqual(fruits, ["Mango", "Apple", "Orange", "Banana"]);

  // toSorted
  var sorted = fruits.toSorted();
  assert.deepStrictEqual(sorted, ["Apple", "Banana", "Mango", "Orange"]);

  // toReverse
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var reversed = fruits.toReversed();
  assert.deepStrictEqual(reversed, ["Mango", "Apple", "Orange", "Banana"]);

  // forEach
  var numbers = [45, 4, 9, 16, 25];
  var txt = "";
  numbers.forEach(function myFunction(value, index, array) {
    txt += value + "-";
  });
  assert.strictEqual(txt, "45-4-9-16-25-");

  // map
  var numbers1 = [45, 4, 9, 16, 25];
  var numbers2 = numbers1.map(myFunction);

  function myFunction(value, index, array) {
    return value * 2;
  }
  assert.deepStrictEqual(numbers2, [90, 8, 18, 32, 50]);

  // filter
  var numbers = [45, 4, 9, 16, 25];
  var over18 = numbers.filter(function myFunction(value, index, array) {
    return value > 18;
  });
  assert.deepStrictEqual(over18, [45, 25]);

  // reduce
  var numbers = [45, 4, 9, 16, 25];
  let sum = numbers.reduce(function myFunction(total, value, index, array) {
    return total + value;
  });
  assert.equal(sum, 99);

  // every
  var numbers = [45, 4, 9, 16, 25];
  var allOver3 = numbers.every(function myFunction(value, index, array) {
    return value > 3;
  });
  assert.ok(allOver3);

  // some
  var numbers = [45, 4, 9, 16, 25];
  var someOver18 = numbers.some(function myFunction(value, index, array) {
    return value > 18;
  });
  assert.equal(someOver18, true);

  // spread operators
  const q1 = ["Jan", "Feb", "Mar"];
  const q2 = ["Apr", "May", "Jun"];
  const q3 = ["Jul", "Aug", "Sep"];
  const q4 = ["Oct", "Nov", "Des"];

  const year = [...q1, ...q2, ...q3, ...q4];
  assert.deepStrictEqual(year, [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ]);

  // array destructing
  var fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

  var [f1, f2, f3, f4, f5 = "default fruit"] = fruits;
  assert.equal(f1, "Bananas");
  assert.equal(f5, "default fruit");

  var fruits = ["Bananas", "Oranges", "Apples", "Mangos", "jojo"];
  var [f1, f2, f3, f4, f5 = "default fruit"] = fruits;
  assert.equal(f1, "Bananas");
  assert.equal(f5, "jojo");

  // Destructuring
  let [fruit1, fruit2] = fruits;
  assert.equal(fruit1, "Bananas");
  assert.equal(fruit2, "Oranges");

  let { [0]: fruit0, [2]: fruit3 } = fruits;
  assert.equal(fruit0, "Bananas");
  assert.equal(fruit3, "Apples");

  // Create an Array
  var numbers = [10, 20, 30, 40, 50, 60, 70];

  // Destructuring
  const [a, b, ...rest] = numbers;
  assert.deepStrictEqual(rest, [30, 40, 50, 60, 70]);

  // at
  var name = "W3Schools";
  var letter = name.at(2);
  assert.equal(letter, "S");
  var letter = name.at(22);
  assert.ok(!letter);

  // entries
  var entries = fruits.entries();
  for (const [index, value] of entries) {
    console.log(index, value);
  }
}
