import { ShipStorage, Article } from "./custom_types.d";

// same as aliase
let ship: ShipStorage = {
  max: 10,
  items: [{ weight: 1 }, { weight: 2 }],
};

console.log(ship);
console.log(ship.items[0].weight);

const movie: Article = {
  title: "Die Hard",
  price: 10,
  var: 1,
  stock: 10,
  description: "Action movie",
};

console.log(movie);
