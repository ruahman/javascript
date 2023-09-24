// unknow is perferable to any.
// it forces you to check the type before using it.

let value: unknown = 10;

// unlike any, you can't access any properties on an unknown type
// unless you check the type first
if (typeof value === "number") {
  let a = value + 10;
  console.log(a);
}

if (typeof value === "string") {
  let b = value + "10";
  console.log(b);
}
