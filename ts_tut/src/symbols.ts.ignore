import assert from "node:assert";

export default function symbols() {
  console.log("***** symbols *****");

  // 1. Basic creation — every Symbol() call produces a unique value
  const s1 = Symbol();
  const s2 = Symbol();
  assert.notStrictEqual(s1, s2);

  // 2. Optional description (for debugging only, doesn't affect identity)
  const s3 = Symbol("id");
  const s4 = Symbol("id");
  assert.notStrictEqual(s3, s4); // still unique
  assert.strictEqual(s3.description, "id");

  // 3. TypeScript `unique symbol` type — const-only, structurally distinct
  const ID: unique symbol = Symbol("ID");
  type HasID = { [ID]: number };
  const obj: HasID = { [ID]: 42 };
  assert.strictEqual(obj[ID], 42);

  // 4. Symbols as object property keys — won't appear in for..in or Object.keys()
  const KEY = Symbol("key");
  const record: Record<string | symbol, unknown> = { visible: "yes" };
  record[KEY] = "hidden";
  assert.strictEqual(record[KEY], "hidden");
  assert.ok(!Object.keys(record).includes("key")); // not enumerable via string keys

  // 5. Global symbol registry: Symbol.for() / Symbol.keyFor()
  const g1 = Symbol.for("app.id");
  const g2 = Symbol.for("app.id");
  assert.strictEqual(g1, g2); // same reference from registry
  assert.strictEqual(Symbol.keyFor(g1), "app.id");

  // 6. Well-known symbols — customise built-in behaviour
  class Range {
    constructor(private start: number, private end: number) {}
    [Symbol.iterator]() {
      let current = this.start;
      const end = this.end;
      return {
        next() {
          return current <= end
            ? { value: current++, done: false as const }
            : { value: undefined, done: true as const };
        },
      };
    }
  }
  const range = new Range(1, 3);
  assert.deepEqual([...range], [1, 2, 3]);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("you need to run npm run test");
}
