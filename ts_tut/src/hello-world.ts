export function hello(): string {
  return "hello world";
}

if (import.meta.main) {
  console.log("execute `npm run test src/hello-world.test.ts`");
}
