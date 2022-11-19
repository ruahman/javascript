function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
export default () => {
  console.log("***** unions *****");

  printStatusCode(404);
  printStatusCode("FourOFour");
};
