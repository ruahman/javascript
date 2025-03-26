export default function exhaustive_type_checking(expect) {
    function area(s) {
        switch (s.kind) {
            case "circle":
                return Math.PI * s.radius ** 2;
            case "square":
                return s.size ** 2;
            case "rectangle":
                return s.width * s.height;
            // use block scoped if you declare a variable withing the case
            default: {
                // this will never hit
                const _exhaustiveCheck = s;
                return _exhaustiveCheck;
            }
        }
    }
    const circle = { kind: "circle", radius: 5 };
    const square = { kind: "square", size: 5 };
    const rectangle = { kind: "rectangle", width: 5, height: 5 };
    let res = area(circle);
    expect(res).toBe(78.53981633974483);
    res = area(square);
    expect(res).toBe(25);
    res = area(rectangle);
    expect(res).toBe(25);
}
//# sourceMappingURL=exhaustive_type_checking.js.map