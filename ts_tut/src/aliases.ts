import assert from "node:assert";

export default function aliases() {
  // alias is a way to create new types

  // create an alias for types
  type CarYear = number;
  type CarType = string;
  type CarModel = string;

  // you can also create aliases for objects
  type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
  };

  // use your aliases
  const carYear: CarYear = 2001;
  const carType: CarType = "Toyota";
  const carModel: CarModel = "Carola";
  const car: Car = {
    year: carYear,
    type: carType,
    model: carModel,
  };

  assert.equal(car.year, 2001);

  assert.equal(car.type, "Toyota");

  assert.equal(car.model, "Carola");

  // you can make aliases for unions
  type Combinable = number | string;
  let comb: Combinable = 0;
  assert(typeof comb == "number");

  comb = "tes";
  assert.equal(comb, "tes");
  assert(typeof comb === "string");

  type alphanumeric = string | number;
  let input: alphanumeric;
  input = 100; // valid
  assert(typeof input === "number");

  input = "Hi"; // valid
  assert(typeof input === "string");

  // input = false; // Compiler error
  type Optional<T> = T | null | undefined;

  const optional: Optional<number> = null;
  assert(optional === null);

  const optional2: Optional<number> = undefined;
  assert(optional2 === undefined);

  const optional3: Optional<number> = 42;
  assert(optional3 === 42);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("if you want to see the tests");
  console.log("run: just test aliases");
}
