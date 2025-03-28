import type { Expect } from "bun:test";
import type { Article, ShipStorage } from "./custom_types.d";

export default function custom_types(expect: Expect) {
  // same as aliase
  const ship: ShipStorage = {
    max: 10,
    items: [{ weight: 1 }, { weight: 2 }],
  };

  expect(ship).toEqual({
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

  expect(movie).toEqual({
    title: "Die Hard",
    price: 10,
    var: 1,
    stock: 10,
    description: "Action movie",
  });

  console.log(movie);
}
