function getProcuct(id) {
    return {
        id: id,
        name: "Awesome Gadget " + id,
        price: 99.5,
    };
}
var product = getProcuct(1);
console.log(product);
var showProduct = function (name, price) {
    console.log("The product " + name + " consts " + price);
};
showProduct(product.name, product.price);
