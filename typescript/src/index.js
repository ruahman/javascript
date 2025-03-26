import assert from "node:assert/strict";
function index() {
    const test = 22;
    console.log(test);
    console.log("hello world");
    console.log("From index()");
    assert.equal(test, 22);
}
index();
//# sourceMappingURL=index.js.map