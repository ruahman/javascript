import { desc, run, task, sh } from "https://deno.land/x/drake@v1.4.6/mod.ts";

// $ deno run -A Drakefile.tx hello
desc("Minimal Drake task");
task("hello", [], async function() {
  console.log("Hello from Drake!");
  await sh("deno run --allow-env main.ts")
});

run()