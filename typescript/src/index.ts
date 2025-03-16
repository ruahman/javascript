const assert = require("node:assert");

export function index() {
	const message: string = "Hello, TypeScript!";

	console.log(message);
	console.log("From index()");
	assert.strictEqual(4, 4);
}
