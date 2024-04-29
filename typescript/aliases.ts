import { Expect } from "bun:test";

export default function aliases(expect: Expect) {
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

  expect(car.year).toBe(2001);
  expect(car.type).toBe("Toyota");
  expect(car.model).toBe("Carola");

  // you can make aliases for unions
  type Combinable = number | string;
  let comb: Combinable = 0;
  expect(comb).toBeTypeOf("number");
  comb = "tes";
  expect(comb).toBe("tes");
  expect(comb).toBeTypeOf("string");

  type alphanumeric = string | number;
  let input: alphanumeric;
  input = 100; // valid
  expect(input).toBeTypeOf("number");
  input = "Hi"; // valid
  expect(input).toBeTypeOf("string");

  // input = false; // Compiler error
  type Optional<T> = T | null | undefined;

  const optional: Optional<number> = null;
  expect(optional).toBe(null);
  const optional2: Optional<number> = undefined;
  expect(optional2).toBe(undefined);
  const optional3: Optional<number> = 42;
  expect(optional3).toBe(42);
  expect(optional3).toBeTypeOf("number");
}
