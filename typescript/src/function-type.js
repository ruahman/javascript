export default function function_type(expect) {
    // setup function type
    let addtype;
    addtype = (x, y) => {
        return x + y;
    };
    expect(addtype(1, 2)).toBe(3);
    const addtype2 = (x, y) => {
        return x + y;
    };
    expect(addtype2(1, 2)).toBe(3);
}
//# sourceMappingURL=function-type.js.map