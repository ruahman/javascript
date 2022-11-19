export default () => {
  console.log("***** arrays *****");

  // simple array
  const a: number[] = [1, 2, 3, 4, 5];
  a.push(66);
  console.log("simple array ", a);

  const b: Array<string> = ["hello", "string", "array"];
  console.log("simple array: ", b);

  // read only array
  const names: readonly string[] = ["Dylan"];
  // names.push("Jack");
  console.log("readonly array: ", names);

  // type inference
  const numbers2 = [1, 2, 3]; // inferred to type number[]
  console.log("type inference: ", numbers2);
};
