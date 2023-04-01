export default function unions() {
  console.log("**** unions ****");

  // when a variable can have more than one variable type
  function printStatusCode(code: string | number) {
    console.log(code);
  }
  printStatusCode(400);
  printStatusCode("400");
}
