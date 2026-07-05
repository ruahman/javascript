import assert from "node:assert";

// typeof allows you to use the type of a predefined object or function

export default function () {
  function add(a: number, b: number) {
    return a + b;
  }

  // param func is typeof add function
  function passInAdd(func: typeof add, a: number, b: number) {
    return func(a, b);
  }

  assert.equal(passInAdd(add, 10, 30), 40);

  // expect(passInAdd(add, 10, 30)).toBe(40);

  const exampleObject = {
    name: "John",
    age: 30,
  };

  // param obj is typeof exampleObject
  function printName(obj: typeof exampleObject): string {
    return obj.name + " " + obj.age;
  }

  assert.equal(printName(exampleObject), "John 30");

  // expect(printName(exampleObject)).toBe("John 30");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("if you want to see the tests");
  console.log("run: just test typeof");
}
