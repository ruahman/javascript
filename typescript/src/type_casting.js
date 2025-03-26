import { expect } from "bun:test";
export default function type_casting() {
    const foo = {};
    foo.bar = 123;
    foo.bas = "hello";
    expect(foo).toEqual({ bar: 123, bas: "hello" });
    expect(typeof foo).toBe("object");
    const fff = "hello";
    const bar = fff;
    expect(typeof bar).toBe("string");
}
//# sourceMappingURL=type_casting.js.map