import assert from "node:assert";

export default function readonly() {
  console.log("***** readonly *****");


  type User = {
    readonly _id: string; // this property is readonly and never changes once set
    name: string;
    email: string;
    isActive: boolean;
  };

  const user: User = {
    _id: "123",
    name: "John",
    email: "dego@yahoo.com",
    isActive: true,
  };

  assert.equal(user._id, "123");
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  readonly();
}
