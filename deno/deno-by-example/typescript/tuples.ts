export default () => {
  console.log("**** tuples ****");

  // basic Tuple
  const person: [string, number, boolean] = ["diego", 41, true];
  console.log("basic tuple: ", person);

  // define our tuple
  // deno-lint-ignore prefer-const
  let ourTuple: [number, boolean, string];

  // initialize correctly
  ourTuple = [5, false, "Coding God was here"];
  console.log("basic tuple: ", ourTuple);

  // readonly tuple
  const ourReadonlyTuple: readonly [number, boolean, string] = [
    5,
    true,
    "The Real Coding God",
  ];
  // cant do this on a readonly
  // ourReadonlyTuple.push('Coding God took a day off');
  console.log("readonly tuple: ", ourReadonlyTuple);

  // named tuple

  // This is purely for documentation purposes
  const graph: [x: number, y: number] = [55.2, 41.3];
  console.log("named tuple: ", graph);

  // deconstructing
  const [x, y] = graph;
  console.log("deconstructing tuples: ", x, y);

  // tuple array
  // deno-lint-ignore prefer-const
  let employee: [string, number][];
  employee = [
    ["aaa", 1],
    ["bbb", 34],
  ];
  console.log("array of tuples: ", employee);
};
