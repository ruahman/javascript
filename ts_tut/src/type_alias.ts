import assert from "node:assert";

// type aliases allow you to create a new type
// they are generally used for unions, intersections, and mixins
// use interfaces for objects

export default function () {
  // type aliases allow you to create a new type
  type Employee = {
    name: string;
    age: number;
    job: string;
  };

  // make an instance of the new type
  const employee: Employee = {
    name: "Lee",
    age: 30,
    job: "Developer",
  };

  assert.equal(employee.name, "Lee");
  assert.equal(employee.age, 30);
  assert.equal(employee.job, "Developer");
  // expect(employee.name).toBe("Lee");
  // expect(employee.age).toBe(30);
  // expect(employee.job).toBe("Developer");

  // type aliases are good for unions
  type Locations = "Seattle" | "New York" | "Los Angeles";
  const loc: Locations = "Seattle";

  // extend / mix types together
  type StaffMember = {
    name: string;
    salary: number;
    role: string;
    type?: string;
  };

  // you cna mix types, sort of like a mixin
  type StaffMemberWithId = {
    id: number;
  } & StaffMember;

  const staffMember: StaffMemberWithId = {
    id: 1,
    name: "Lee",
    salary: 100000,
    role: "Developer",
  };

  assert.equal(staffMember.id, 1);
  assert.equal(staffMember.name, "Lee");
  assert.equal(staffMember.salary, 100000);
  assert.equal(staffMember.role, "Developer");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("if you want to see the tests");
  console.log("run: just test type_alias");
}
