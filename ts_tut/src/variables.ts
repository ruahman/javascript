import assert from "node:assert";

export default function variables() {
  console.log("***** variables *****");

  let temperature = 6; // infer type

  // temperature = "warm"; // error
  assert.strictEqual(temperature, 6);

  const humidity = 79; // can not reasign

  let endtime: Date;
  endtime = new Date(); // you can assign this latter

  //explicit
  const fistname: string = "diego";
  assert.strictEqual(fistname, "diego");

  //implicit
  const fistname1 = "Diego";
  assert.strictEqual(fistname1, "Diego");

  // any
  const json: any = JSON.parse("55");
  console.log(typeof json);
  assert.strictEqual(typeof json, "number");

  let v: any = true;
  assert.strictEqual(v, true);

  v = "string";
  assert.strictEqual(v, "string");

  // basic types
  const id: number = 5;
  const company: string = "acme";
  const isPublished: boolean = true;
  assert.strictEqual(id, 5);
  assert.strictEqual(company, "acme");
  assert.strictEqual(isPublished, true);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("run `npm run test src/variables.test.ts");
}
