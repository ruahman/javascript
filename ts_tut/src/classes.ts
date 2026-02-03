import assert from "node:assert";

class Person {
  name: string;
  private readonly middle: string;
  private readonly last: string;

  public constructor(name: string, middle: string, last: string) {
    this.name = name;
    this.middle = middle;
    this.last = last;
  }

  public getmiddle() {
    return this.middle;
  }

  public getname() {
    return this.name;
  }

  public getlast() {
    return this.last;
  }
}

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  // this is a shortcut to create properties
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
    readonly firstName: string,
    private lastName: string,
    private jobTitle: string,
  ) {
    EmployeeStatic.headcount++;
    console.log(
      this.firstName,
      this.lastName,
      this.jobTitle,
      EmployeeStatic.headcount,
    );
  }

  public static getHeadcount() {
    return EmployeeStatic.headcount;
  }
}

abstract class Polygon {
  public abstract getArea(): number;
  public toString(): string {
    return "this is a polygon";
  }
}

// let test: Polygon = new Polygon(); // error

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

class PersonPrivate {
  #ssn: string;
  #firstName: string;
  #lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.#ssn = ssn;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  getFullNameAndSSN(): string {
    return `${this.#firstName} ${this.#lastName} ${this.#ssn}`;
  }
}

class PersonReadOnly {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

export default function () {
  console.log("**** classes ****");
  const person = new Person("diego", "ramon", "vila");
  assert.equal(person.name, "diego");
  assert.equal(person.getname(), "diego");

  const rec = new Rectangle(34, 56);
  // expect(rec.width).toBe(34);
  // expect(rec.height).toBe(56);
  assert.equal(rec.getArea(), 1904);

  const square = new Square(5);
  assert.equal(square.getArea(), 25);
  assert.equal(square.toString(), "this is a square");

  const personGetSet = new PersonGetSet(42, "diego", "vila");
  personGetSet.age = 44;
  assert.equal(personGetSet.age, 44);
  assert.equal(personGetSet.firstName, "diego");
  assert.equal(personGetSet.lastName, "vila");
  assert.equal(personGetSet.getFullName(), "diego vila");

  new EmployeeStatic("John", "Doe", "Front-end Developer");
  new EmployeeStatic("Jane", "Doe", "Back-end Developer");

  assert.equal(EmployeeStatic.getHeadcount(), 2);

  const test2: Polygon = new Rectange2(2, 3);
  assert.equal(test2.getArea(), 6);

  const personPrivate = new PersonPrivate("171280926", "John", "Doe");
  assert.equal(personPrivate.getFullNameAndSSN(), "John Doe 171280926");

  const personReadOnly = new PersonReadOnly(new Date("1990-01-01"));
  // assert.equal(personReadOnly.birthDate, new Date("1990-01-01"));
}
