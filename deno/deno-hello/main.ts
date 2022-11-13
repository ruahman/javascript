import demo from "./hello-deno.ts";
import lodash_demo from "./lodash.ts";
import log_demo from "./log.ts";

if (import.meta.main) {
  await demo();
  lodash_demo();
  log_demo();
}
