import assert from "node:assert";

export function sets() {
  var letters = new Set(["a", "b", "c"]);
  letters.add("a");
  letters.add("a");
  letters.add("a");
  letters.add("a");
  assert.equal(letters.size, 3);
  for (const x of letters) {
    console.log(x);
  }
  assert.equal(letters.has("a"), true);
  assert.equal(letters.has("z"), false);
}
