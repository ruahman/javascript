export function interpolation() {
  var name = "diego";
  var email = "run@gmal.com";
  var title = "hello there";

  var msg = `Welcome to this class! Your ${title} is ${name}, contact: ${email}`;

  console.log(msg);
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  interpolation();
}
