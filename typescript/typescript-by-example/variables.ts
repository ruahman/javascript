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
}
