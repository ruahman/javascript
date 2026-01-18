export function anytype() {
  console.log("anytype test");
  // it can be any type in the future
  let age: any = 25;
  console.log(age);
  age = true;
  console.log(age);

  let mixed: any[] = [];
  mixed.push(23);
  mixed.push("diego");
  mixed.push(true);
  console.log(mixed);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("run `npm run test src/anytype.test.ts`");
}
