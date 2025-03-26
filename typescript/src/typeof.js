export default function typeOf(expect) {
    function add(a, b) {
        return a + b;
    }
    function passInAdd(func, a, b) {
        return func(a, b);
    }
    expect(passInAdd(add, 10, 30)).toBe(40);
    const exampleObject = {
        name: "John",
        age: 30,
    };
    function printName(obj) {
        return obj.name + " " + obj.age;
    }
    expect(printName(exampleObject)).toBe("John 30");
}
//# sourceMappingURL=typeof.js.map