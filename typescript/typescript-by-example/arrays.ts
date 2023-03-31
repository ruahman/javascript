export default function arrays() {
  console.log("**** arrays ****");

  const names: string[] = [];
  names.push("Diego");

  // readonly
  const names2: readonly string[] = ["diego"];
  //   names2.push("andy");

  // type inference
  const numbers = [1, 2, 3];
  numbers.push(4);
}
