// deno-lint-ignore-file

export default function demo() {
  console.log("***** variables *****");

  // basic types
  const id: number = 5;
  const company: string = "acme";
  const isPublished: boolean = true;
  console.log("basic types :", id, company, isPublished);

  // explicit type
  let firstName: string = "Dylan";
  console.log("explicit type: ", firstName);

  // implicite type
  let firstName2 = "Dylan";
  console.log("implicite type: ", firstName2);

  // type any
  let x: any = "any";
  x = 23;
  let y;
  y = "any";
  y = 7;
  y = true;

  console.log("type any: ", x, y);

  // unions
  //   can be a string or number
  let cat: string | number;
  cat = "cat";
  cat = 7;

  // type assertions

  let cid: any = "1";

  let customerId = cid as number;
  console.log(customerId);
}
