export function hello(): string {
  return "hello world";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("if you want to see the tests");
  console.log("run: npm run test src/hello-world.test.ts");
}
