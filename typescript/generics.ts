// generic function
function createPairs<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

// generic class
class NameValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

function generics() {
  console.log("**** generics ****");
  console.log(createPairs("hello", 42));
  let value = new NameValue<number>("my name");
  value.setValue(10);
  console.log(value.toString());
}

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbersg = [1, 5, 7, 4, 2, 9];
let colors = ["red", "green", "blue"];

console.log(getRandomElement<number>(numbersg));
console.log(getRandomElement<string>(colors));

// constraintes for generics.
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

let personG = merge({ name: "Digeo" }, { age: 42 });
console.log(personG);

// generics in classes
class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error("The stack is overflow!");
    }
    this.elements.push(element);
  }
  pop(): T | undefined {
    if (this.elements.length == 0) {
      throw new Error("The stack is empty!");
    }
    return this.elements.pop();
  }
}

// generic interfaces
interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}

class List<T> implements Collection<T> {
  private items: T[] = [];

  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}

function isAvailable<Formats extends object>(
  obj: Formats,
  key: string,
): boolean {
  return key in obj;
}

// union arrays
let arr1: Array<number | string | boolean> = [1, 2, 3, "hello", true];

type URLList = {
  [key: string]: string;
};

function loadFile<Formate extends URLList>(
  fileFomate: Formate,
  key: string,
): string {
  return key in fileFomate ? fileFomate[key] : "";
}

type StringArray = Array<string>;

const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);
const l2 = last<string>(["a", "b", "c"]);

const makeTupple = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const tupple = makeTupple(5, "hello");
const tupple2 = makeTupple<string, number>("hello", 5);

// you can specify what properties an object must have by extending the type
const makePerson = <T extends { name: string; age: number }>(obj: T): T => {
  return {
    ...obj,
    foo: "foo",
    bar: "bar",
  };
};

const person = makePerson({ name: "Diego", age: 42 });
const person2 = makePerson({
  name: "Diego",
  age: 42,
  some: "some",
  extra: "extra",
});

// this causes a problem, because object must have name
// const person3 = makePerson({ age: 42, foo: "foo" });

function specifyType<T>(arg: T): T {
  return arg;
}

// you can specify the type to what ever object you want
const x = specifyType<{ foo: string; bar: string }>({ foo: "foo", bar: "bar" });
// return  the type of parameter
const y = specifyType({ some: "some", thing: "thing" });

// make user that result is  key from object
function getKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let res = getKey({ name: "Diego", age: 42 }, "name");
let res2 = getKey({ name: "Diego", age: 42 }, "age");
// let res3 = getKey({ name: "Diego", age: 42 }, "foo"); // error
