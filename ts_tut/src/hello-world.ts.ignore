export function hello(): string {
  return "hello world";
}

let file = "file:///" + process.argv[1]?.replace(/\\/g, '/');

if (import.meta.url === file) {
  console.log(hello())
}
