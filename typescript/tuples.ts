console.log("**** tuples ****");

// define our tuple
let ourTuple: [number, boolean, string];
ourTuple = [33, true, "diego"];
ourTuple.push("you can still do this");

// readonly
const ourReadOnlyTuple: readonly [number, boolean, string] = [5, false, "bob"];
//   ourReadOnlyTuple.push("cant do this");

// named tuples
const graph: [x: number, y: number] = [56, 78];
console.log("named tuple: ", graph);

// destructing tuples
const graph2: [number, number] = [34, 56];
const [x, y] = graph2;

// tuple array
// deno-lint-ignore prefer-const
let employee: [string, number][];
employee = [
  ["aaa", 1],
  ["bbb", 34],
];
console.log("array of tuples: ", employee);

let skill: [string, number];
skill = ["Programming", 5];

let color: [number, number, number] = [255, 0, 0];

// optional elements
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// you can also try type alias for tuples

type Drink = [string, boolean, number];

const coke: Drink = ["coke", true, 200];
