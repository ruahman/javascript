import assert from "node:assert";

export function hello_world() {
  console.log("hello world");
  assert.equal(true, true);
  assert.deepEqual({ foo: "bar" }, { foo: "bar" });
  assert.ok(true);
}

export function whoAmI(name, nickName, age) {
  console.log(`
    Hi, I'm ${name} (aki ${nickName})
    and I'm ${age} years old.
    dieog was here
  `);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  hello_world();
  whoAmI();
}
