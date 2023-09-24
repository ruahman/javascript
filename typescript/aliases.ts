console.log("**** aliases ****");

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

// you can make aliases for unions
type Combinable = number | string;
let comb: Combinable = 0;
comb = "tes";

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = "Hi"; // valid

// input = false; // Compiler error
type Optional<T> = T | null | undefined;

const optional: Optional<number> = null;
const optional2: Optional<number> = undefined;
const optional3: Optional<number> = 42;
