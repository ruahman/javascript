export default function literalTypes(expect) {
    console.log("**** literal types ****");
    function move(direction) {
        return `You moved ${direction}`;
    }
    expect(move("north")).toBe("You moved north");
    expect(move("south")).toBe("You moved south");
    expect(move("east")).toBe("You moved east");
    expect(move("west")).toBe("You moved west");
    function paint(color) {
        return `You painted it ${color}`;
    }
    expect(paint("red")).toBe("You painted it red");
    expect(paint("blue")).toBe("You painted it blue");
    expect(paint("green")).toBe("You painted it green");
    function drive(speed) {
        return `You drove at speed ${speed}`;
    }
    expect(drive(1)).toBe("You drove at speed 1");
    expect(drive(2)).toBe("You drove at speed 2");
    expect(drive(3)).toBe("You drove at speed 3");
    expect(drive(4)).toBe("You drove at speed 4");
    function answer(answer) {
        return `You answered ${answer}`;
    }
    expect(answer(true)).toBe("You answered true");
    expect(answer(false)).toBe("You answered false");
}
//# sourceMappingURL=literal-types.js.map