export function proxy() {
  const target = { name: "Joseph" };
  const handler = {
    get: (obj, prop) => {
      console.log(`Trying to get ${prop} from ${JSON.stringify(obj)}`);
      return Reflect.get(obj, prop) || "default";
    },
  };
  const proxy = new Proxy(target, handler);
  console.log(proxy.name);
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  proxy();
}
