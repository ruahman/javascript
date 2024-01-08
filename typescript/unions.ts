
// when a variable can have more than one variable type
function printStatusCode(code: string | number) {
  console.log(code);
}
printStatusCode(400);
printStatusCode("400");

let result: number | string;
result = 10; // OK
result = "Hi"; // also OK
// result = false; // a boolean value, not OK

function addUnions(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}

// union with string literals
let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
// mouseEvent = "mouseover"; // compiler error
