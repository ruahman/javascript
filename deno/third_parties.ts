import { camelCase, dotCase } from "https://deno.land/x/case@2.1.1/mod.ts";
const text = "test string";
let res = camelCase(text);
console.log(res);
res = dotCase(text);
console.log(res);
