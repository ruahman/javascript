export default function tuples(expect: any) {
	console.log("**** tuples ****");

	// define our tuple
	const ourTuple: [number, boolean, string] = [33, true, "diego"];
	expect(ourTuple).toEqual([33, true, "diego"]);

	// readonly
	const ourReadOnlyTuple: readonly [number, boolean, string] = [
		5,
		false,
		"bob",
	];
	expect(ourReadOnlyTuple).toEqual([5, false, "bob"]);

	// named tuples
	const graph: [x: number, y: number] = [56, 78];
	console.log("named tuple: ", graph);
	expect(graph).toEqual([56, 78]);

	// destructing tuples
	const graph2: [number, number] = [34, 56];
	const [x, y] = graph2;
	expect(x).toBe(34);
	expect(y).toBe(56);

	// tuple array
	const employee: [string, number][] = [
		["aaa", 1],
		["bbb", 34],
	];
	console.log("array of tuples: ", employee);
	expect(employee.length).toBe(2);
	expect(employee[0]).toEqual(["aaa", 1]);
	expect(employee[1]).toEqual(["bbb", 34]);

	// optional elements
	type RGB = [number, number, number, number?];
	const bgColor: RGB = [0, 255, 255, 0.5];
	const headerColor: RGB = [0, 255, 255];
	expect(bgColor).toEqual([0, 255, 255, 0.5]);
	expect(headerColor).toEqual([0, 255, 255]);

	// you can also try type alias for tuples

	type Drink = [string, boolean, number];

	const coke: Drink = ["coke", true, 200];
	expect(coke).toEqual(["coke", true, 200]);
}
