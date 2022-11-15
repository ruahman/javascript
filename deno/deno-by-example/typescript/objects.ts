export default () => {
  console.log("***** objects *****");

  // explicite object
  const car: { type: string; model: string; year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
  };
  const user: { id: number; name: string } = {
    id: 1,
    name: "diego",
  };
  console.log("explicite object: ", car, user);

  // object inference
  const car2 = {
    type: "Toyota",
  };
  car2.type = "Ford"; // no error
  // car2.type = 2;
  console.log("object inference: ", car2);

  // optional property
  const car3: { type: string; mileage?: number } = { // no error
    type: "Toyota",
  };
  car3.mileage = 2000;
  console.log("optionsal prop: ", car3.mileage);

  // index signatures
  const nameAgeMap: { [index: string]: number } = {};
  nameAgeMap.Jack = 25;
  console.log("index signatures: ", nameAgeMap.Jack);

  // simpler way to define and object
  type User = {
    id: number;
    name: string;
  };

  const user2: User = {
    id: 22,
    name: "andy",
  };
  console.log("simple way to define object: ", user2);
};
