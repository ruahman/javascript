import assert from "node:assert";

export default function type_casting() {

  console.log("***** type cast *****");

  // if the type is unknown then you can type cast it
  const xt: unknown = 777;
  let yt = xt as number;
  assert.equal(xt, yt);
  assert.equal(typeof yt, "number");

  const zt = "777";
  const zy = Number(zt);
  assert.equal(zt, zy);
  assert.equal(typeof zy, "number");

  const fff: any = "hello";
  const bar = <string>fff;
  const bar2 = fff as string;
  assert.equal(typeof bar, "string");
  assert.equal(typeof bar2, "string");
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  type_casting();
}
