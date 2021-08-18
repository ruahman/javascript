interface Product {
  id: number;
  name: string;
  price: number;
}

function getProcuct(id): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}

const product = getProcuct(1);
console.log(product);

const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} consts ${price}`);
};

showProduct(product.name, product.price);
