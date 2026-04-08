import assert from "node:assert";

export default function variables() {
  console.log("***** variables *****");

  // infer type
  let temperature = 6;

  // temperature = "warm"; // error
  assert.equal(temperature, 6);

  const humidity = 79; // can not reasign

  // you can assign this latter
  let endtime: Date;
  endtime = new Date();

  //explicit
  const fistname: string = "diego";
  assert.strictEqual(fistname, "diego");

  //implicit
  const fistname1 = "Diego";
  assert.strictEqual(fistname1, "Diego");

  // any can be anything
  const json: any = JSON.parse("55");
  console.log(typeof json);
  assert.strictEqual(typeof json, "number");

  let v: any = true;
  assert.strictEqual(v, true);

  // any can also be changed later
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
  console.log("you need to run npm run test");
}
