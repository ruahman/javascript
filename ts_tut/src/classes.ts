import assert from "node:assert";

export default function () {
  console.log("**** classes ****");

  class Animal {
    // Access modifiers: public, private, protected
    constructor(
      public name: string,
      private age: number,
      protected species: string,
    ) {}

    speak(): string {
      return `${this.name} makes a sound.`;
    }

    // get propery
    get info(): string {
      return `${this.name} (${this.age})`;
    }
  }

  // inherit from Animal
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, age, "Canis lupus");
    }

    speak(): string {
      return `${this.name} barks!`;
    }
  }

  const dog = new Dog("Rex", 3);
  assert.equal(dog.speak(), "Rex barks!");
  assert.equal(dog.info, "Rex (3)");

  class Person {
    name: string;
    // readonly property
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

  const person = new Person("diego", "ramon", "vila");
  assert.equal(person.name, "diego");
  assert.equal(person.getname(), "diego");

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

  const rec = new Rectangle(34, 56);
  // expect(rec.width).toBe(34);
  // expect(rec.height).toBe(56);
  assert.equal(rec.getArea(), 1904);

  const square = new Square(5);
  assert.equal(square.getArea(), 25);
  assert.equal(square.toString(), "this is a square");

  // show how to use getters and setters
  class PersonGetSet {
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

  const personGetSet = new PersonGetSet(42, "diego", "vila");
  personGetSet.age = 44;
  assert.equal(personGetSet.age, 44);
  assert.equal(personGetSet.firstName, "diego");
  assert.equal(personGetSet.lastName, "vila");
  assert.equal(personGetSet.getFullName(), "diego vila");

  // show static variables
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

  new EmployeeStatic("John", "Doe", "Front-end Developer");
  new EmployeeStatic("Jane", "Doe", "Back-end Developer");

  assert.equal(EmployeeStatic.getHeadcount(), 2);

  // abstract clasees
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

  const test2: Polygon = new Rectange2(2, 3);
  assert.equal(test2.getArea(), 6);

  // javascript private fields
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
  const personPrivate = new PersonPrivate("171280926", "John", "Doe");
  assert.equal(personPrivate.getFullNameAndSSN(), "John Doe 171280926");

  // read-only properties
  class PersonReadOnly {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
      this.birthDate = birthDate;
    }
  }

  const personReadOnly = new PersonReadOnly(new Date("1990-01-01"));
  // assert.equal(personReadOnly.birthDate, new Date("1990-01-01"));
}
