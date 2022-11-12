export default function demo() {
  console.log("***** casting *****");

  const x: unknown = "hello";
  console.log((x as string).length);

  const y: unknown = "hello";
  console.log((<string> y).length);
}
