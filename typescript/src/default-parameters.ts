import { Expect } from "bun:test";

function applyDiscount(price: number, discount: number = 0.05) {
  return price * (1 - discount);
}

export default function default_parameters(expect: Expect) {
  expect(applyDiscount(100)).toBe(95);
  expect(applyDiscount(100, 0.1)).toBe(90);
}
