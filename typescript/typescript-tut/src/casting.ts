export default function casting() {
  console.log("**** casting ****");
  let x: unknown = "hello world";
  console.log((x as string).length);

  let y: unknown = "hello world2";
  console.log((<string> y).length);
}
