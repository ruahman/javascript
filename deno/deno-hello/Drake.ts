import { desc, run, sh, task } from "https://deno.land/x/drake@v1.6.0/mod.ts";

desc("Minimal Drake task");
task("shell", [], async function () {
  await sh("echo 'hello shell'");
});

run();
