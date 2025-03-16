import { expect } from "bun:test";

export default function typesAliases() {
	type Employee = {
		name: string;
		age: number;
		job: string;
	};

	const employee: Employee = {
		name: "Lee",
		age: 30,
		job: "Developer",
	};

	expect(employee.name).toBe("Lee");
	expect(employee.age).toBe(30);
	expect(employee.job).toBe("Developer");

	type Locations = "Seattle" | "New York" | "Los Angeles";
	const loc: Locations = "Seattle";
	expect(loc).toBe("Seattle");

	// extend / mix types together
	type StaffMember = {
		name: string;
		salary: number;
		role: string;
		type?: string;
	};

	// sort of like a mixin
	type StaffMemberWithId = {
		id: number;
	} & StaffMember;

	const staffMember: StaffMemberWithId = {
		id: 1,
		name: "Lee",
		salary: 100000,
		role: "Developer",
	};

	expect(staffMember.id).toBe(1);
	expect(staffMember.name).toBe("Lee");
	expect(staffMember.salary).toBe(100000);
	expect(staffMember.role).toBe("Developer");
}
