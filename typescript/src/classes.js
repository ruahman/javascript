var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PersonPrivate_ssn, _PersonPrivate_firstName, _PersonPrivate_lastName;
class Person {
    constructor(name, middle, last) {
        this.name = name;
        this.middle = middle;
        this.last = last;
    }
    getmiddle() {
        return this.middle;
    }
    getname() {
        return this.name;
    }
    getlast() {
        return this.last;
    }
}
class Rectangle {
    // this is a shortcut to create properties
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return "this is a rectangel";
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
    toString() {
        return "this is a square";
    }
}
class PersonGetSet {
    // private _age: number
    // private _firstName: string;
    // private _lastName: string;
    constructor(_age, _firstName, _lastName) {
        this._age = _age;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error("The age is invalid");
        }
        this._age = theAge;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirstName) {
        if (!theFirstName) {
            throw new Error("Invalid first name.");
        }
        this._firstName = theFirstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(theLastName) {
        if (!theLastName) {
            throw new Error("Invalid last name.");
        }
        this._lastName = theLastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class EmployeeStatic {
    constructor(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        EmployeeStatic.headcount++;
        console.log(this.firstName, this.lastName, this.jobTitle, EmployeeStatic.headcount);
    }
    static getHeadcount() {
        return EmployeeStatic.headcount;
    }
}
EmployeeStatic.headcount = 0;
class Polygon {
    toString() {
        return "this is a polygon";
    }
}
// let test: Polygon = new Polygon(); // error
class Rectange2 extends Polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class PersonPrivate {
    constructor(ssn, firstName, lastName) {
        _PersonPrivate_ssn.set(this, void 0);
        _PersonPrivate_firstName.set(this, void 0);
        _PersonPrivate_lastName.set(this, void 0);
        __classPrivateFieldSet(this, _PersonPrivate_ssn, ssn, "f");
        __classPrivateFieldSet(this, _PersonPrivate_firstName, firstName, "f");
        __classPrivateFieldSet(this, _PersonPrivate_lastName, lastName, "f");
    }
    getFullNameAndSSN() {
        return `${__classPrivateFieldGet(this, _PersonPrivate_firstName, "f")} ${__classPrivateFieldGet(this, _PersonPrivate_lastName, "f")} ${__classPrivateFieldGet(this, _PersonPrivate_ssn, "f")}`;
    }
}
_PersonPrivate_ssn = new WeakMap(), _PersonPrivate_firstName = new WeakMap(), _PersonPrivate_lastName = new WeakMap();
class PersonReadOnly {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }
}
export default function classes(expect) {
    console.log("**** classes ****");
    const person = new Person("diego", "ramon", "vila");
    expect(person.name).toBe("diego");
    expect(person.getname()).toBe("diego");
    const rec = new Rectangle(34, 56);
    // expect(rec.width).toBe(34);
    // expect(rec.height).toBe(56);
    expect(rec.getArea()).toBe(1904);
    const square = new Square(5);
    expect(square.getArea()).toBe(25);
    expect(square.toString()).toBe("this is a square");
    const personGetSet = new PersonGetSet(42, "diego", "vila");
    personGetSet.age = 44;
    expect(personGetSet.age).toBe(44);
    expect(personGetSet.firstName).toBe("diego");
    expect(personGetSet.lastName).toBe("vila");
    expect(personGetSet.getFullName()).toBe("diego vila");
    new EmployeeStatic("John", "Doe", "Front-end Developer");
    new EmployeeStatic("Jane", "Doe", "Back-end Developer");
    expect(EmployeeStatic.getHeadcount()).toBe(2);
    const test2 = new Rectange2(2, 3);
    expect(test2.getArea()).toBe(6);
    const personPrivate = new PersonPrivate("171280926", "John", "Doe");
    expect(personPrivate.getFullNameAndSSN()).toBe("John Doe 171280926");
    const personReadOnly = new PersonReadOnly(new Date("1990-01-01"));
    expect(personReadOnly.birthDate).toEqual(new Date("1990-01-01"));
}
//# sourceMappingURL=classes.js.map