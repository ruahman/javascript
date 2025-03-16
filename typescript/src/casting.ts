import { expect } from "bun:test";

export default function casting() {
	// as to string
	const q: unknown = "hello world";
	expect(q as string).toBeTypeOf("string");
	const humid3 = 79 as number;
	expect(humid3).toBeTypeOf("number");

	// <>
	const w: unknown = "hello world2";
	expect(<string>w).toBeTypeOf("string");
}
