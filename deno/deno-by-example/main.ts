import deno_demo from "./deno_demo.ts";
import lodash from "./lodash.ts";
import logs from "./log.ts";
import typescript from "./typescript/mod.ts";

// deno upgrade : upgrade deno
// Environment variables
//    DENO_DIR: this is where cached imports, trapilation, LSP server info, etc.
//    DENO_INSTALL_ROOT: where installed scripts are stored

if (import.meta.main) {
  await deno_demo();
  lodash();
  logs();
  typescript();
  // await demo();
  // lodash_demo();
  // log_demo();
}
