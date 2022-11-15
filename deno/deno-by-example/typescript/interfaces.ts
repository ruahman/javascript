export default () => {
  console.log("***** interfaces *****");

  // Interfaces are similar to type aliases, except they only apply to object types.
  interface User {
    readonly id: number;
    name: string;
    age?: number; // this is optional
    register(): string;
  }

  const user: User = {
    id: 123,
    name: "diego",
    register(): string {
      return "foobar";
    },
  };
  console.log("simple interface: ", user);

  interface Rectangle {
    height: number;
    width: number;
  }

  const rectangle: Rectangle = {
    height: 20,
    width: 10,
  };
  console.log("simple interface: ", rectangle);

  // Extending Interfaces
  interface Rectangle {
    height: number;
    width: number;
  }

  interface ColoredRectangle extends Rectangle {
    color: string;
  }

  const coloredRec: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red",
  };
  console.log("extending Interfaces: ", coloredRec);

  // interfaces function
  interface MathFunc {
    (x: number, y: number): number;
  }

  const add: MathFunc = (x: number, y: number): number => x + y;

  console.log("interface functions: ", add(2, 2));
};
