import assert from "node:assert";

function applyDiscount(price: number, discount = 0.05) {
  return price * (1 - discount);
}

export default function () {
  assert.equal(applyDiscount(100), 95);
  assert.equal(applyDiscount(100, 0.1), 90);
}
