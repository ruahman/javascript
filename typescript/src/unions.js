import { expect } from "bun:test";
export default function unions() {
    // when a variable can have more than one variable type
    function printStatusCode(code) {
        console.log(code);
    }
    printStatusCode(400);
    printStatusCode("400");
    let result;
    result = 10; // OK
    expect(result).toBe(10);
    result = "Hi"; // also OK
    expect(result).toBe("Hi");
    function addUnions(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        if (typeof a === "string" && typeof b === "string") {
            return a.concat(b);
        }
        throw new Error("Parameters must be numbers or strings");
    }
    expect(addUnions(10, 20)).toBe(30);
    expect(addUnions("Hello", "World")).toBe("HelloWorld");
    let mouseEvent = "click"; // valid
    expect(mouseEvent).toBe("click");
    mouseEvent = "dblclick"; // valid
    expect(mouseEvent).toBe("dblclick");
    mouseEvent = "mouseup"; // valid
    expect(mouseEvent).toBe("mouseup");
    mouseEvent = "mousedown"; // valid
    expect(mouseEvent).toBe("mousedown");
    // mouseEvent = "mouseover"; // compiler error
}
//# sourceMappingURL=unions.js.map