import { Expect } from "bun:test";

export default function variables(expect: Expect) {
  console.log("***** variables *****");

  //explicit
  const fistname: string = "diego";
  expect(fistname).toBe("diego");

  //implicit
  const fistname1 = "Diego";
  expect(fistname1).toBe("Diego");

  //any
  const json: any = JSON.parse("55");
  console.log(typeof json);
  expect(typeof json).toBe("number");

  let v: any = true;
  expect(v).toBe(true);
  v = "string";
  expect(v).toBe("string");

  // basic types
  const id: number = 5;
  const company: string = "acme";
  const isPublished: boolean = true;
  expect(id).toBe(5);
  expect(company).toBe("acme");
  expect(isPublished).toBe(true);
}
