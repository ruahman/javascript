// deno-lint-ignore-file

export default function demo() {
  console.log("***** variables *****");

  const _id: number = 5;
  const _company: string = "acme";
  const _isPublished: boolean = true;

  // can take any value
  let x: any = "any";
  x = 23;
  let y;
  y = "any";
  y = 7;
  y = true;

  console.log(x);

  let a: number[] = [1, 2, 3, 4, 5];

  // read only array
  const names: readonly string[] = ["Dylan"];
  // names.push("Jack");

  // Tuple
  let person: [string, number, boolean] = ["diego", 41, true];

  // readonly tuple
  const ourReadonlyTuple: readonly [number, boolean, string] = [
    5,
    true,
    "The Real Coding God",
  ];

  // named tuple
  const graph: [x: number, y: number] = [55.2, 41.3];

  // tuple array
  let employee: [string, number][];
  employee = [
    ["aaa", 1],
    ["bbb", 34],
  ];

  // unions
  //   can be a string or number
  let cat: string | number;
  cat = "cat";
  cat = 7;

  // enums
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  console.log(Direction.Left);

  // objects
  const user: { id: number; name: string } = {
    id: 1,
    name: "diego",
  };

  const car: { type: string; model: string; year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
  };

  // optional property
  const car2: { type: string; mileage?: number } = { // no error
    type: "Toyota",
  };
  car2.mileage = 2000;

  // index signatures
  const nameAgeMap: { [index: string]: number } = {};
  nameAgeMap.Jack = 25;

  // simpler way to define and object
  type User = {
    id: number;
    name: string;
  };

  const user2: User = {
    id: 22,
    name: "andy",
  };

  // type assertions

  let cid: any = "1";

  let customerId = cid as number;
  console.log(customerId);
}
