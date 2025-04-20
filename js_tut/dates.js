import assert from "node:assert";

export function dates() {
  var d = new Date();
  assert.ok(d);
  d = new Date("2022-03-25");
  console.log(d);
  assert.equal(
    d.toString(),
    "Thu Mar 24 2022 20:00:00 GMT-0400 (Atlantic Standard Time)",
  );

  d = new Date(2018, 11, 24, 10, 33, 30, 0);
  console.log(d.toString());
  assert.equal(
    d.toString(),
    "Mon Dec 24 2018 10:33:30 GMT-0400 (Atlantic Standard Time)",
  );

  d = new Date(100000000000);
  assert.equal(
    d.toString(),
    "Sat Mar 03 1973 05:46:40 GMT-0400 (Atlantic Standard Time)",
  );
  assert.equal(d.toDateString(), "Sat Mar 03 1973");
  assert.equal(d.toUTCString(), "Sat, 03 Mar 1973 09:46:40 GMT");
  assert.equal(d.toISOString(), "1973-03-03T09:46:40.000Z");

  // now
  var ms = Date.now();
  console.log(ms);
}
