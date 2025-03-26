import { expect } from "bun:test";
export default function type_alias_vs_interface() {
    const diego = {
        name: "Diego",
        hungry: true,
        programmer: true,
    };
    expect(diego.programmer).toBe(true);
    expect(diego.hungry).toBe(true);
    expect(diego.name).toBe("Diego");
    const greating = (name) => {
        return `Hello ${name}`;
    };
    expect(greating("Diego")).toBe("Hello Diego");
    const greating2 = (name) => {
        return `Hello ${name}`;
    };
    expect(greating2("Diego")).toBe("Hello Diego");
    // this works
    const personExtend = {
        firstName: "Diego",
        lastName: "Lee",
        age: 18,
    };
    expect(personExtend.firstName).toBe("Diego");
    expect(personExtend.lastName).toBe("Lee");
    expect(personExtend.age).toBe(18);
    const andy = {
        first: "Andy",
        last: "Lee",
        years: 18,
    };
    const superPerson = {
        first: "Super Andy",
        last: "Lee",
        years: 18,
        superPower: "fly",
    };
    expect(superPerson.first).toBe("Super Andy");
    expect(superPerson.last).toBe("Lee");
    expect(superPerson.years).toBe(18);
    expect(superPerson.superPower).toBe("fly");
}
//# sourceMappingURL=type_alias_vs_interface.js.map