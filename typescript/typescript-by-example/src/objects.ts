export default function objects() {
  console.log("**** objects ****");
  const car: { type: string; model: string; year: number } = {
    type: "Toyota",
    model: "Carolla",
    year: 2009,
  };

  // type inference
  const car2 = {
    type: "Ford",
  };
  car2.type = "Honda";

  // optional property
  const car3: { type: string; milage?: number } = {
    type: "Hunday",
  };
  car3.milage = 70000;

  // index signatures,
  // allow any fields without specifying
  const nameAgeMap: { [index: string]: number } = {};
  nameAgeMap.randomName = 123;
  nameAgeMap.testName = 345;
}
