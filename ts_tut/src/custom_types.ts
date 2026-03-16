import assert from "node:assert";
import type { Article, ShipStorage } from "./custom_types.d.ts";

export default function custom_types() {
  // same as aliase
  const ship: ShipStorage = {
    max: 10,
    items: [{ weight: 1 }, { weight: 2 }],
  };

  assert.deepEqual(ship, {
    max: 10,
    items: [{ weight: 1 }, { weight: 2 }],
  });

  const movie: Article = {
    title: "Die Hard",
    price: 10,
    var: 1,
    stock: 10,
    description: "Action movie",
  };

  assert.deepEqual(movie, {
    title: "Die Hard",
    price: 10,
    var: 1,
    stock: 10,
    description: "Action movie",
  });

  console.log(movie);
}
