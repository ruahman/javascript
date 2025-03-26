export default function arrays(expect) {
    const names = [];
    names.push("Diego");
    expect(names).toContain("Diego");
    // readonly array, cant push to this
    const names2 = ["diego"];
    expect(names2).toContain("diego");
    //   names2.push("andy");
    //  you can type inference an array
    const numbers = [1, 2, 3];
    numbers.push(4);
    expect(numbers).toEqual([1, 2, 3, 4]);
    // simple array
    const a = [1, 2, 3, 4, 5];
    a.push(66);
    expect(a).toEqual([1, 2, 3, 4, 5, 66]);
}
//# sourceMappingURL=arrays.js.map