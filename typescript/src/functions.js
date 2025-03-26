import { expect } from "bun:test";
export default function functions() {
    // simple function
    function add_test(a, b) {
        return a + b;
    }
    const add = (a, b) => a + b;
    expect(add(3, 4)).toBe(7);
    const add2 = (a, b) => a + b;
    expect(add2(3, 4)).toBe(7);
    // specify the return type
    function getTime() {
        return new Date().getTime();
    }
    // void return type
    function printHello() {
        console.log("void");
    }
    // specify the parameter types
    function multiply(a, b) {
        return a * b;
    }
    // optional parameters
    function addx(a, b, c) {
        return a + b + (c || 0);
    }
    // default parameters
    function pow(value, exponent = 10) {
        return value ** exponent;
    }
    function devide({ dividen, divisor, }) {
        return dividen / divisor;
    }
    function addRest(a, b, ...rest) {
        return a + b + rest.reduce((p, c) => p + c, 0);
    }
    // declare function search(query: string, tags: string[]): Result;
    // deconstruct objects
    // here is how I can type anotate when I deconstruct an object
    const logWeather = ({ date, weather, }) => {
        console.log(date);
        console.log(weather);
    };
    // void
    // this is just for void fuctions
    function log(message) {
        console.log(message);
    }
    // never
    // function never returns because it throws an exception or infinite loop
    function raiseError(message) {
        throw new Error(message);
    }
    const loop = function forever() {
        while (true) {
            console.log("Hello");
        }
    };
}
//# sourceMappingURL=functions.js.map