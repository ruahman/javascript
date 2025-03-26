import { expect } from "bun:test";
export default function casting() {
    // as to string
    const q = "hello world";
    expect(q).toBeTypeOf("string");
    const humid3 = 79;
    expect(humid3).toBeTypeOf("number");
    // <>
    const w = "hello world2";
    expect(w).toBeTypeOf("string");
}
//# sourceMappingURL=casting.js.map