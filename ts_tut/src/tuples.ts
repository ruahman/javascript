import assert from "node:assert";

// arrays with fixed lenght

export default function tuples() {
  console.log("**** tuples ****");

  // define our tuple
  const ourTuple: [number, boolean, string] = [33, true, "diego"];
  // expect(ourTuple).toEqual([33, true, "diego"]);
  assert.deepEqual(ourTuple, [33, true, "diego"]);

  // readonly, treat array as read only
  const ourReadOnlyTuple: readonly [number, boolean, string] = [
    5,
    false,
    "bob",
  ];
  // ourReadOnlyTuple.push(1); // cant do this with readonly

  assert.deepEqual(ourReadOnlyTuple, [5, false, "bob"]);

  // named tuples, what does this do?
  const graph: [x: number, y: number] = [56, 78];
  console.log("named tuple: ", graph);
  // expect(graph).toEqual([56, 78]);
  assert.deepEqual(graph, [56, 78]);

  // destructing tuples
  const graph2: [number, number] = [34, 56];
  const [x, y] = graph2;
  // expect(x).toBe(34);
  // expect(y).toBe(56);
  assert.equal(x, 34);
  assert.equal(y, 56);

  // tuple array
  const employee: [string, number][] = [
    ["aaa", 1],
    ["bbb", 34],
  ];
  console.log("array of tuples: ", employee);
  assert.equal(employee.length, 2);
  assert.deepEqual(employee[0], ["aaa", 1]);
  assert.deepEqual(employee[1], ["bbb", 34]);

  // optional elements
  type RGB = [number, number, number, number?];
  const bgColor: RGB = [0, 255, 255, 0.5];
  const headerColor: RGB = [0, 255, 255];
  // expect(bgColor).toEqual([0, 255, 255, 0.5]);
  assert.deepEqual(bgColor, [0, 255, 255, 0.5]);
  // expect(headerColor).toEqual([0, 255, 255]);
  assert.deepEqual(headerColor, [0, 255, 255]);

  // you can also try type alias for tuples

  type Drink = [string, boolean, number];

  const coke: Drink = ["coke", true, 200];
  // expect(coke).toEqual(["coke", true, 200]);
  assert.deepEqual(coke, ["coke", true, 200]);
}
