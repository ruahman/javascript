function getArray<T>(items: T[]): T[] {
  return new Array(0).concat(items);
}

export default function demo() {
  console.log("***** generics *****");
  const numArray = getArray<number>([1, 2, 3, 4, 5]);
  console.log(numArray);
  const strArray = getArray<string>(["bird", "cat", "dog"]);
  console.log(strArray);
}
