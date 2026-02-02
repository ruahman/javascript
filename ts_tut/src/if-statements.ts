import assert from "node:assert";

export default function if_statements() {
  const max = 100;
  let counter = 99;

  if (counter < max) {
    counter++;
  } else {
    counter = 1;
  }

  assert.equal(counter, 100);

  // ternery operator
  let tcounter = 0;
  const res = ++tcounter > 10 ? "over" : "under";

  assert.equal(res, "under");

  let discount: number;
  const itemCount = 11;

  if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
  } else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount
  } else {
    discount = 15; // 15%
  }

  console.log(`You got ${discount}% discount. `);
  assert.equal(discount, 15);
}
