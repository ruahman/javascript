import assert from "node:assert";

export function index_signatures() {
  // index signatures are useful if you want to define a dictionary of objects
  let phones: {
    [k: string]: {
      country: string;
      area: string;
      number: string;
    };
  };

  phones = {
    home: { country: "+1", area: "773", number: "454-8005" },
    mom: { country: "+1", area: "773", number: "220-3668" },
    // fax: { country: "+1", area: "773", mobile: "220-3668" }, // this causes a problem
  };

  assert.deepEqual(phones.home, {
    country: "+1",
    area: "773",
    number: "454-8005",
  });
  // more simple index signature
  const x: { [k: string]: string } = {};
  x.foo = "bar";
  // x.wrong = 5;
}
