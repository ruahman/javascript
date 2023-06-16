class Person {
  name: string;
  private readonly middle: string;

  public constructor(name: string, middle: string, private lastname: string) {
    this.name = name;
    this.middle = middle;
  }

  public getname() {
    return this.name;
  }
}

// interface

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return "this is a rectangel";
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  public override toString(): string {
    return "this is a square";
  }
}

// abstract class
abstract class Polygon {
  public abstract getArea(): number;
  public toString(): string {
    return "this is a polygon";
  }
}

class Rectange2 extends Polygon {
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

export default function classes() {
  console.log("**** classes ****");
  const person = new Person("diego", "ramon", "vila");
  console.log(person);
  const rec = new Rectangle(34, 56);
  console.log(rec);
  const square = new Square(5);
  console.log(square);
  console.log(square.toString());

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
