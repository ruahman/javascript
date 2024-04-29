import { Expect } from "bun:test";

export default function conditionalTypes(expect: Expect) {
  // user terinary logic to determine the type of a variable

  // if T extends x then SomeType is A else SomeType is B
  // type SomeType = T extends X ? A : B;

  type SomeType = string;
  type MyConditionalType = SomeType extends string ? string : null;

  function someFunction<T>(value: T) {
    type ConditiionalType2 = SomeType extends string
      ? string
      : SomeType extends number
        ? number
        : SomeType extends boolean
          ? boolean
          : null;

    const someOtherFunction = <A extends ConditiionalType2>(someArg: A): A => {
      const a = someArg;
      return a;
    };
    return someOtherFunction;
  }

  const result = someFunction(true);
  expect(result(true)).toBe(true);

  const result2 = someFunction("string");
  expect(result2("string")).toBe("string");
}
