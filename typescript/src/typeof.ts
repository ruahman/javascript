import { Expect } from "bun:test";

export default function typeOf(expect: Expect) {
  function add(a: number, b: number) {
    return a + b;
  }

  function passInAdd(func: typeof add, a: number, b: number) {
    return func(a, b);
  }

  expect(passInAdd(add, 10, 30)).toBe(40);

  const exampleObject = {
    name: "John",
    age: 30,
  };

  function printName(obj: typeof exampleObject): string {
    return obj.name + " " + obj.age;
  }

  expect(printName(exampleObject)).toBe("John 30");
}
