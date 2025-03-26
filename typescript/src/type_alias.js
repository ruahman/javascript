import { expect } from "bun:test";
export default function typesAliases() {
    const employee = {
        name: "Lee",
        age: 30,
        job: "Developer",
    };
    expect(employee.name).toBe("Lee");
    expect(employee.age).toBe(30);
    expect(employee.job).toBe("Developer");
    const loc = "Seattle";
    expect(loc).toBe("Seattle");
    const staffMember = {
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
//# sourceMappingURL=type_alias.js.map