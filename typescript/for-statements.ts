import { Expect } from "bun:test";

export default function for_statements(expect: Expect) {
  // for (;;) {
  //   console.log("infinate loop");
  // }

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  let i = 0;
  for (;;) {
    console.log(i);
    i++;
    if (i > 9) break;
  }
  // @ts-expect-error should be 10
  expect(i).toBe(10);
}
