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

// getters and setters

class PersonGetSet {
  // private _age: number
  // private _firstName: string;
  // private _lastName: string;

  constructor(
    private _age: number,
    private _firstName: string,
    private _lastName: string,
  ) {}

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error("Invalid first name.");
    }
    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error("Invalid last name.");
    }
    this._lastName = theLastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// static methods
class EmployeeStatic {
  private static headcount = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string,
  ) {
    EmployeeStatic.headcount++;
  }

  public static getHeadcount() {
    return EmployeeStatic.headcount;
  }
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

  const personGetSet = new PersonGetSet(42, "diego", "vila");
  personGetSet.age = 44;
  console.log(
    "getter and setter: ",
    personGetSet.age,
    personGetSet.firstName,
    personGetSet.lastName,
  );

  const _john = new EmployeeStatic("John", "Doe", "Front-end Developer");
  const _jane = new EmployeeStatic("Jane", "Doe", "Back-end Developer");

  console.log("static method: ", EmployeeStatic.getHeadcount()); // 2
}
