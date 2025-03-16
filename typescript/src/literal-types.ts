export default function literalTypes(expect: any) {
	console.log("**** literal types ****");

	// literal types,
	// can only have a specific value

	type Direction = "north" | "south" | "east" | "west";
	function move(direction: Direction) {
		return `You moved ${direction}`;
	}

	expect(move("north")).toBe("You moved north");
	expect(move("south")).toBe("You moved south");
	expect(move("east")).toBe("You moved east");
	expect(move("west")).toBe("You moved west");

	// string literal types
	type Color = "red" | "blue" | "green";
	function paint(color: Color) {
		return `You painted it ${color}`;
	}

	expect(paint("red")).toBe("You painted it red");
	expect(paint("blue")).toBe("You painted it blue");
	expect(paint("green")).toBe("You painted it green");

	// numeric literal types
	type Speed = 1 | 2 | 3 | 4;
	function drive(speed: Speed) {
		return `You drove at speed ${speed}`;
	}

	expect(drive(1)).toBe("You drove at speed 1");
	expect(drive(2)).toBe("You drove at speed 2");
	expect(drive(3)).toBe("You drove at speed 3");
	expect(drive(4)).toBe("You drove at speed 4");

	// boolean literal types
	type YesNo = true | false;
	function answer(answer: YesNo) {
		return `You answered ${answer}`;
	}

	expect(answer(true)).toBe("You answered true");
	expect(answer(false)).toBe("You answered false");
}
