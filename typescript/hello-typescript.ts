console.log("hello world");

function testAdd(x: number, y: number) {
  return x + y;
}

testAdd(1, 2);

// this causes problems in javascript
//testAdd("1","2");

const message: string = "Hello, World!";
console.log(message);

interface Product {
  id: number;
  name: string;
  price: number;
}

function getMyProduct(id: number): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}

const myproduct = getMyProduct(1);
console.log(`The product ${myproduct.name} costs $${myproduct.price}`);
