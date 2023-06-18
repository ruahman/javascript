console.log("**** interfaces ****");

// interfaces are simular to alias except it only applies to objects
interface Rectangle {
  height: number;
  width: number;
}

const rectange: Rectangle = {
  height: 23,
  width: 55,
};

// extended interfaces
interface ColoredRectangle extends Rectangle {
  color: string;
}

const colorRec: ColoredRectangle = {
  height: 45,
  width: 67,
  color: "blue",
};

// interfaces function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

console.log("interface functions: ", add(2, 2));

// problem interfaces solve
interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}
const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);
