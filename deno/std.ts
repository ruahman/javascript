import * as uuid from "https://deno.land/std@0.190.0/uuid/mod.ts";

const uid = uuid.v1.generate();
console.log(`uid: ${uid}`);

// older std has read json
import { readJson, writeJson } from "https://deno.land/std@0.68.0/fs/mod.ts";
const json = await readJson("deno.json");
console.log(json);

const books = [
  { foo: "bar" },
  { test: "me" },
  { hello: "world" },
];

await writeJson("books.json", books, { spaces: 2 });

import { serve } from "https://deno.land/std@0.68.0/http/server.ts";
const server = serve({ port: 3000 });
console.log("listening on port 3000");

for await (const req of server) {
  req.respond({ body: "hello world" });
  console.log("request made");
}
