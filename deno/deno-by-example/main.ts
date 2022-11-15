import demo from "./hello-deno.ts";
import lodash_demo from "./lodash.ts";
import log_demo from "./log.ts";
import typescript from "./typescript/mod.ts";

if (import.meta.main) {
  // deno upgrade : upgrade deno
  await demo();
  lodash_demo();
  log_demo();
  typescript();
}
