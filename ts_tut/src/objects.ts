import assert from "node:assert";

export default function objects() {
  console.log("**** objects ****");

  // you can spcify the type in objec
  const car: { type: string; model: string; year: number; info: () => void } = {
    type: "Toyota",
    model: "Carolla",
    year: 2009,
    info() {
      console.log(this.model, this.year, this.type);
    },
  };

  car.info();

  // you can use an object type to descripe a parameter to a function
  function printCar(car?: {
    make: string;
    model: string;
    year: number;
    chargeVoltage?: number; // optional
  }): void {
    console.log(`${car?.make} ${car?.model} ${car?.year}`);
    if (car?.chargeVoltage) {
      console.log(car.chargeVoltage); // now this is trated a a number
    }
  }

  assert.equal(car.type, "Toyota");

  // type inference
  const car2 = {
    type: "Ford",
  };
  car2.type = "Honda";

  assert.equal(car2.type, "Honda");

  // optional property
  const car3: { type: string; milage?: number } = {
    type: "Hunday",
  };
  car3.milage = 70000;

  // index signatures,
  // allow any fields without specifying as long as it fits pattern
  const nameAgeMap: { [index: string]: number } = {};
  nameAgeMap.randomName = 123;
  nameAgeMap.testName = 345;

  // deconstruct objects
  let { type } = car3;
  console.log(type);

  // rename deconstructed
  let { type: myType } = car3;
  console.log("myType: ", myType);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  objects();
}
