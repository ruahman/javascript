import assert from "node:assert";

// decomposing an object into it's parts

function getSomeRecords() {
  return [
    {
      name: "diego",
      email: "ruahman@gmail",
    },
    {
      name: "andy",
    },
  ];
}

export function destructuring() {
  var [
    { name: firstName, email: firstEmail = "nobody@none.tld" },
    { name: secondName, email: secondEmail = "nobody@none.tld" },
  ] = getSomeRecords();
  console.log(firstName, secondName);
  console.log(firstEmail, secondEmail);
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  destructuring();
}
