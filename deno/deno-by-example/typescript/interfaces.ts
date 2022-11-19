// Interfaces are similar to type aliases, except they only apply to object types.
export interface User {
  readonly id: number;
  name: string;
  age?: number; // this is optional
  register(): string;
}

export default () => {
  console.log("***** interfaces *****");

  // // Interfaces are similar to type aliases, except they only apply to object types.
  // interface User {
  //   readonly id: number;
  //   name: string;
  //   age?: number; // this is optional
  //   register(): string;
  // }

  const user: User = {
    id: 123,
    name: "diego",
    register(): string {
      return "foobar";
    },
  };
  console.log("simple interface: ", user);

  interface Rectangle {
    height: number;
    width: number;
  }

  const rectangle: Rectangle = {
    height: 20,
    width: 10,
  };
  console.log("simple interface: ", rectangle);

  // Extending Interfaces
  interface Rectangle {
    height: number;
    width: number;
  }

  interface ColoredRectangle extends Rectangle {
    color: string;
  }

  const coloredRec: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red",
  };
  console.log("extending Interfaces: ", coloredRec);

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

  // interface function types

  interface KeyValueProcessor {
    (key: number, value: string): void;
  }

  function addKeyValue(key: number, value: string): void {
    console.log("addKeyValue: key = " + key + ", value = " + value);
  }

  function updateKeyValue(key: number, value: string): void {
    console.log("updateKeyValue: key = " + key + ", value = " + value);
  }

  let kvp: KeyValueProcessor = addKeyValue;
  kvp(1, "Bill");

  kvp = updateKeyValue;
  kvp(2, "Steve");

  // interface for array types
  interface NumList {
    [index: number]: number;
  }

  const numArr: NumList = [1, 2, 3];
  console.log(numArr);
};
