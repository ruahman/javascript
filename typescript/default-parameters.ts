function applyDiscount(price: number, discount: number = 0.05) {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
