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

// a class can implement a interface
class Rectangle implements Shape {
  // this is a shortcut to create properties
  public constructor(
    protected readonly width: number,
    protected readonly height: number
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

// abstract class, you cant create instances of this class
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
    protected readonly height: number
  ) {
    super();
  }
  public getArea(): number {
    return this.width * this.height;
  }
}

// this works
let test2: Polygon = new Rectange2(2, 3);

// getters and setters

class PersonGetSet {
  // private _age: number
  // private _firstName: string;
  // private _lastName: string;

  constructor(
    private _age: number,
    private _firstName: string,
    private _lastName: string
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
    private jobTitle: string
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
    personGetSet.lastName
  );

  const _john = new EmployeeStatic("John", "Doe", "Front-end Developer");
  const _jane = new EmployeeStatic("Jane", "Doe", "Back-end Developer");

  console.log("static method: ", EmployeeStatic.getHeadcount()); // 2
}

class Person2 {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person2("171280926", "John", "Doe");

class Person3 {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Person4 {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

class Person5 {
  constructor(readonly birthDate: Date) {
    this.birthDate = birthDate;
  }
}

class Person6 {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

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

class Person7 {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person7 {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }
  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}.`;
  }
}

let employee = new Employee("John", "Doe", "Front-end Developer");
console.log(employee.getFullName());
console.log(employee.describe());

// static
class Employee2 {
  static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee2.headcount++;
  }

  public static getHeadcount() {
    return Employee2.headcount;
  }
}

let john = new Employee2("John", "Doe", "Front-end Developer");
let jane = new Employee2("Jane", "Doe", "Back-end Developer");

console.log(Employee2.headcount); // 2
console.log(Employee2.getHeadcount); // 2

abstract class Employee3 {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number;
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

class FullTimeEmployee extends Employee3 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employee3 {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}

let john1 = new FullTimeEmployee("John", "Doe", 12000);
let jane2 = new Contractor("Jane", "Doe", 100, 160);

console.log(john1.compensationStatement());
console.log(jane2.compensationStatement());

// private fields

class Article {
  // this is a private field
  #title: string;
  constructor(title: string) {
    this.#title = title;
  }
  getTitle(): string {
    return this.#title;
  }
}
