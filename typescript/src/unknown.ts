import { expect } from "bun:test";

export default function unknown() {
  // unknow is perferable to any.
  // it forces you to check the type before using it.

  let value: unknown = 10;

  // unlike any, you can't access any properties on an unknown type
  // unless you check the type first
  if (typeof value === "number") {
    const a = value + 10;
    expect(a).toBe(20);
  }

  value = "hello";

  if (typeof value === "string") {
    const b = value + "10";
    expect(b).toBe("hello10");
  }
}
