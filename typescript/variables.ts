export default function variables() {
  console.log("***** variables *****");

  //explicit
  let fistname: string = "diego";

  //implicit
  let fistname1 = "Diego";

  //any
  const json: any = JSON.parse("55");
  console.log(typeof json);

  let v: any = true;
  v = "string";

  // basic types
  const id: number = 5;
  const company: string = "acme";
  const isPublished: boolean = true;
  console.log("basic types :", id, company, isPublished);
}
