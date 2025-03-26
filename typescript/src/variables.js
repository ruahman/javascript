import { expect } from "bun:test";
export default function variables() {
    console.log("***** variables *****");
    //explicit
    const fistname = "diego";
    expect(fistname).toBe("diego");
    //implicit
    const fistname1 = "Diego";
    expect(fistname1).toBe("Diego");
    //any
    const json = JSON.parse("55");
    console.log(typeof json);
    expect(typeof json).toBe("number");
    let v = true;
    expect(v).toBe(true);
    v = "string";
    expect(v).toBe("string");
    // basic types
    const id = 5;
    const company = "acme";
    const isPublished = true;
    expect(id).toBe(5);
    expect(company).toBe("acme");
    expect(isPublished).toBe(true);
}
//# sourceMappingURL=variables.js.map