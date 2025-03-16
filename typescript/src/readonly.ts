import { expect } from "bun:test";

export default function readonly() {
	type User = {
		readonly _id: string; // this property is readonly and never changes once set
		name: string;
		email: string;
		isActive: boolean;
	};

	const user: User = {
		_id: "123",
		name: "John",
		email: "dego@yahoo.com",
		isActive: true,
	};

	expect(user._id).toBe("123");

	//user._id = "456"; // Compiler error
}
