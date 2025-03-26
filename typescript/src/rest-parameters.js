export function getTotal(...numbers) {
    let total = 0;
    numbers.forEach((num) => (total += num));
    return total;
}
// console.log(getTotal()); // 0
// console.log(getTotal(10, 20)); // 30
// console.log(getTotal(10, 20, 30)); // 60
//# sourceMappingURL=rest-parameters.js.map