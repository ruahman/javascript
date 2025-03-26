export default function tuples(expect) {
    console.log("**** tuples ****");
    // define our tuple
    const ourTuple = [33, true, "diego"];
    expect(ourTuple).toEqual([33, true, "diego"]);
    // readonly
    const ourReadOnlyTuple = [
        5,
        false,
        "bob",
    ];
    expect(ourReadOnlyTuple).toEqual([5, false, "bob"]);
    // named tuples
    const graph = [56, 78];
    console.log("named tuple: ", graph);
    expect(graph).toEqual([56, 78]);
    // destructing tuples
    const graph2 = [34, 56];
    const [x, y] = graph2;
    expect(x).toBe(34);
    expect(y).toBe(56);
    // tuple array
    const employee = [
        ["aaa", 1],
        ["bbb", 34],
    ];
    console.log("array of tuples: ", employee);
    expect(employee.length).toBe(2);
    expect(employee[0]).toEqual(["aaa", 1]);
    expect(employee[1]).toEqual(["bbb", 34]);
    const bgColor = [0, 255, 255, 0.5];
    const headerColor = [0, 255, 255];
    expect(bgColor).toEqual([0, 255, 255, 0.5]);
    expect(headerColor).toEqual([0, 255, 255]);
    const coke = ["coke", true, 200];
    expect(coke).toEqual(["coke", true, 200]);
}
//# sourceMappingURL=tuples.js.map