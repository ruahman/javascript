import { User } from "./interfaces.ts";

class Person implements User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is ${this.id}`;
  }
}

class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

interface Shape {
  getArea: () => number;
}

// implements an interface
class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

// extends a class
class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle2 extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

class PersonP {
  constructor(
    public name: string,
    public readonly age: number,
  ) {}
}

export default function demo() {
  console.log("***** classes *****");

  const person = new Person(23, "diego");
  console.log(person.register());

  const emp = new Employee(34, "andy", "boss");
  console.log(emp);

  const sq = new Square(23);
  console.log(sq);

  const rec = new Rectangle2(1, 2);
  console.log(rec);

  const pubp = new PersonP("diego", 44);
  console.log(pubp);
}
