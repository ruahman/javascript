function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
export default function default_parameters(expect) {
    expect(applyDiscount(100)).toBe(95);
    expect(applyDiscount(100, 0.1)).toBe(90);
}
//# sourceMappingURL=default-parameters.js.map