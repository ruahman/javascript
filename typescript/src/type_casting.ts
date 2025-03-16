import { expect } from "bun:test";

export default function type_casting() {
	// if the type is unknown then you can type cast it
	// const xt = "777";
	// const yt = xt as number;
	// expect(typeof yt).toBe("number");
	interface Foo {
		bar: number;
		bas: string;
	}
	const foo = {} as Foo;
	foo.bar = 123;
	foo.bas = "hello";
	expect(foo).toEqual({ bar: 123, bas: "hello" });
	expect(typeof foo).toBe("object");

	const fff: any = "hello";
	const bar = <string>fff;
	expect(typeof bar).toBe("string");
}
