// Interfaces are similar to type aliases, except they only apply to object types.

export interface User {
  readonly id: number;
  name: string;
  age?: number; // this is optional
  register(): string;
}

export default function demo() {
  console.log("***** interfaces *****");
  const user: User = {
    id: 123,
    name: "diego",
    register(): string {
      return "foobar";
    },
  };
  console.log(user);

  // types can be unions, interfaces cant
  type Point = number | string;

  const x: Point = 1;
  const y: Point = "23";
  console.log(x, y);

  // you can also create interfaces for functions
  interface MathFunc {
    (x: number, y: number): number;
  }

  const add: MathFunc = (x: number, y: number): number => x + y;

  console.log(add(2, 2));

  // extend interfaces
  interface Rectangle {
    height: number;
    width: number;
  }

  interface ColoredRectangle extends Rectangle {
    color: string;
  }

  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red",
  };
  console.log(coloredRectangle);
}
