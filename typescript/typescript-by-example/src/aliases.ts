export default function aliases() {
  console.log("**** aliases ****");

  // create an alias for types
  type CarYear = number;
  type CarType = string;
  type CarModel = string;
  type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
  };

  const carYear: CarYear = 2001;
  const carType: CarType = "Toyota";
  const carModel: CarModel = "Carola";
  const car: Car = {
    year: carYear,
    type: carType,
    model: carModel,
  };

  type Combinable = number | string;
  let comb: Combinable = 0;
  comb = "tes";
}
