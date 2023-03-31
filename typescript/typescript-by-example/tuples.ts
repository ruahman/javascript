export default function tuples() {
  console.log("**** tuples ****");

  // define our tuple
  let ourTuple: [number, boolean, string];
  ourTuple = [33, true, "diego"];
  ourTuple.push("you can still do this");

  // readonly
  const ourReadOnlyTuple: readonly [number, boolean, string] = [
    5,
    false,
    "bob",
  ];
  //   ourReadOnlyTuple.push("cant do this");

  // named tuples
  const graph: [x: number, y: number] = [56, 78];

  // destructing tuples
  const graph2: [number, number] = [34, 56];
  const [x, y] = graph2;
}
